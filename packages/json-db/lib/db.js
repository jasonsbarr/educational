import { parse, prop } from "@jasonsbarr/basics";
import { readFileSync } from "@jasonsbarr/io";

class DB {
  constructor(filePath) {
    this.db = parse(readFileSync(filePath));
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
      throw new Error(`Property ${table} does not exist in JSON DB`);
    }

    this.query.table = table;

    return this;
  }

  select() {
    this.data = prop(this.query.table, this.db);

    return this;
  }

  find(field, value) {
    this.data = this.query.data.find((d) => prop(field, d) === value);
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
          throw new Error(`Operator ${op} is not a valid query operator`);
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
    this.data = this.filterWhere(field, op, value);

    return this;
  }

  // include is understood to be the name of another table
  // whose relationship with the selected table is indicated
  // by the field on the selected table named `${otherTable}Id`
  include(entityTable) {
    const table = this.db[entityTable];

    this.data.forEach((d) => {
      d[entityTable] = table.find((e) => e.id === d[entityTable + id]);
    });

    return this;
  }

  get() {
    const data = this.data;
    this.query = {};
    this.data = {};
    return data;
  }
}

export const db = (filePath) => new DB(filePath);
