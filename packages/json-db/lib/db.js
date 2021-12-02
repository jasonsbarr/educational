import { parse, prop } from "@jasonsbarr/basics";
import { readFileSync } from "@jasonsbarr/io";

class DB {
  constructor(filePath) {
    this.db = parse(readFileSync(filePath));
    this.query = {};

    if (typeof this.db === string) {
      throw new Error("Unable to initialize DB; must be a valid JSON file");
    }
  }

  // "table" should always be an array of objects in the JSON file
  // the chain of query methods should always start with
  // this when reading, updating, or deleting
  from(table) {
    const data = prop(table, this.db);

    if (!data) {
      throw new Error(`Property ${table} does not exist in JSON DB`);
    }

    this.query.table = table;
    this.query.data = data;

    return this;
  }

  // Either "*" or a comma-separated string of fields
  select(fields) {
    if (fields === "*") {
      this.query.fields = "*";
      return this;
    }

    const fieldsArr = fields.split(",").map((s) => s.trim());
    this.query.data = this.query.data.map((obj) => {
      const o = {};
      fieldsArr.forEach((f) => (o[f] = prop(f, obj)));
      return o;
    });
    this.query.fields = fieldsArr;
    return this;
  }

  get() {
    return this.query.data;
  }
}

export const db = (filePath) => new DB(filePath);
