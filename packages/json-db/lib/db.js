import uuid from "uuid";
import { fail, jsonify, parse, prepend, prop, last } from "@jasonsbarr/basics";
import { readFileSync, writeFileSync } from "@jasonsbarr/io";

class DB {
  constructor(filePath, { entities = null } = {}) {
    this.filePath = filePath;
    this.db = parse(readFileSync(filePath));
    this.entities = entities;
    this.query = {};
    this.data = null;

    if (typeof this.db === string) {
      throw new Error("Unable to initialize DB; must be a valid JSON file");
    }
  }

  // "table" should always be the property name for an array of
  // objects in the JSON file. The chain of query methods should
  // always start with this when reading, updating, or deleting
  from(table) {
    const data = prop(table, this.db);

    if (!data) {
      return fail(`Property ${table} does not exist in JSON DB`);
    }

    this.query.table = table;

    return this;
  }

  select() {
    this.data = prop(this.query.table, this.db);

    return this;
  }

  find(field, value) {
    this.data = this.data.find((d) => prop(field, d) === value);
  }

  // private
  filterWhere(field, op, value, data = null) {
    data = data ?? this.data;

    return data.filter((d) => {
      switch (op) {
        case "=":
          return d[field] === value;
        case "<":
          return d[field] < value;
        case "<=":
          return d[field] <= value;
        case ">":
          return d[field] > value;
        case ">=":
          return d[field] >= value;
        case "!=":
          return d[field] !== value;
        case "includes":
          if (typeof d[field] === "string") {
            return d[field].toLowerCase().includes(value.toLowerCase());
          }
          if (Array.isArray(d[field])) {
            return Boolean(d[field].find((v) => v === value));
          }
        default:
          return fail(`Operator ${op} is not a valid query operator`);
      }
    });
  }

  where(field, op, value) {
    this.data = this.filterWhere(field, op, value);

    return this;
  }

  orWhere(field, op, value) {
    const table = this.db[this.query.table];
    const data = this.filterWhere(field, op, value, table);

    this.data = this.data.concat(data);

    return this;
  }

  andWhere(field, op, value) {
    this.data = this.filterWhere(field, op, value, this.data);

    return this;
  }

  // include is understood to be the name of another table
  // whose relationship with the selected table is indicated
  // by the field on the selected table named `${entity}Id`
  include(entity) {
    const table = this.entities
      ? this.db[this.entities[entity]]
      : this.db[entity];

    if (Array.isArray(this.data)) {
      this.data.forEach((d) => {
        d[entity] = table.find((i) => i.id === d[entity + "Id"]);
      });
    } else {
      this.data[entity] = table.find((i) => i.id === this.data[entity + "Id"]);
    }

    return this;
  }

  // join table is named `${leftEntity}_${rightEntity}`
  // in all lowercase. Each row is an object with properties
  // ${leftEntity}Id and ${rightEntity}Id.
  join(leftEntity, rightEntity) {
    const joinTable = this.db[`${leftEntity}_${rightEntity}`];
    const leftTable = this[entities]
      ? this.db[this.entities[leftEntity]]
      : this.db[leftEntity];
    const rightTable = this[entities]
      ? this.db[this.entities[rightEntity]]
      : this.db[rightEntity];
    let data = [];

    for (let row of joinTable) {
      let left = leftTable.find((l) => row[leftEntity + "Id"] === l.id);
      let right = rightTable.find((r) => row[rightEntity + "Id"] === r.id);

      left[leftEntity + "Id"] = left.id;
      right[rightEntity + "Id"] = right.id;
      delete left.id;
      delete right.id;

      const joined = Object.assign({}, left, right);

      data.push(joined);
    }

    this.data = data;

    return this;
  }

  skip(num) {
    this.data = this.data.slice(num + 1);

    return this;
  }

  take(num) {
    this.data = this.data.slice(0, num);

    return this;
  }

  orderBy(field, desc = false) {
    this.data = this.data.sort((a, b) => {
      if (typeof a[field] === "string") {
        return a[field].localeCompare(b[field]);
      }
      return a[field] - b[field];
    });

    if (desc) {
      this.data = this.data.reverse();
    }

    return this;
  }

  sortBy(func, desc = false) {
    this.data = this.data.sort(func);

    if (desc) {
      this.data = this.data.reverse();
    }

    return this;
  }

  newest(table) {
    this.data = last(this.db[table]);

    return this;
  }

  // get id of the object set as newest
  newestId(table) {
    return last(this.db[table]).id;
  }

  get() {
    const data = this.data;
    this.query = {};
    this.data = null;
    return data;
  }

  // use when you have a single data point selected,
  // i.e. after using this.find()
  getField(field) {
    return prop(field, this.data);
  }

  into(table) {
    const data = prop(table, this.db);

    if (!data) {
      return fail(`Property ${table} does not exist in JSON DB`);
    }

    // use array as queue (treat as immutable)
    this.query.insertInto = this.query.insertInto
      ? prepend(table, this.query.insertInto)
      : [table];

    return this;
  }

  insert(data) {
    if (!data) {
      return fail("Must have data to insert");
    }

    if (!this.query.insertInto || !this?.query?.insertInto?.length) {
      return fail("Must select a table to insert into");
    }

    const toInsertInto = last(this.query.insertInto);
    const table = [...this.db[toInsertInto]];
    const id = uuid.v4();

    this.query.insertInto = this.query.insertInto.slice(0, -1);
    table.push({ id, ...data });
    this.db[toInsertInto] = table;

    this.query.rows = this.query.rows ? this.query.rows++ : 1;

    return this;
  }

  write() {
    try {
      writeFileSync(this.filePath, jsonify(this.db));
    } catch (ex) {
      return fail("Error on writing DB to file: " + ex.message);
    }

    this.query = {};
    this.data = null;

    return this.query.rows;
  }

  update(id, table, data) {
    if (!id) {
      return fail("Must have an id to update a single record");
    }

    if (!data) {
      return fail("Must have data to update record with");
    }

    let tableData = [...this.db[table]];

    if (!tableData) {
      return fail(`No data returned for table ${table}`);
    }

    const i = tableData.findIndex((d) => d.id === id);

    if (i < 0) {
      return fail(`Record not found to update with id of ${id}`);
    }

    const record = tableData[i];
    const updated = { ...record, ...data };

    tableData[i] = updated;
    this.db[table] = tableData;
    this.query.rows = this.query.rows ? this.query.rows++ : 1;

    return this;
  }

  updateWhere(field, op, value) {
    if (this.query.table) {
      return fail("Must choose a table before updating with where clause");
    }
    const table = prop(this.query.table, this.db);

    if (!table) {
      return fail(`Data not returned for table ${table}`);
    }

    this.data = this.filterWhere(field, op, value, table);

    return this;
  }

  // must call after updateWhere
  set(data) {
    if (!this.data) {
      return fail("Must select rows before setting updated data");
    }

    if (!data) {
      return fail("Must have data to update records");
    }

    let updated = this.data.map((d) => ({ ...d, ...data }));

    this.data = updated;
    this.db[this.query.table] = updated;
    this.query.rows = updated.length;

    return this;
  }
}

export const Db = (filePath, config) => new DB(filePath, config);
