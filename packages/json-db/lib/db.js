import { parse, prop } from "@jasonsbarr/basics";
import { readFileSync } from "@jasonsbarr/io";

class DB {
  constructor(filePath) {
    this.data = parse(readFileSync(filePath));
    this.query = null;

    if (typeof this.data === string) {
      throw new Error("Unable to initialize DB; must be a valid JSON file");
    }
  }

  // "table" should always be an array of objects in the JSON file
  // the chain of query methods should always start with
  // this when reading, updating, or deleting
  from(table) {
    const data = prop(table, this.data);

    if (!data) {
      throw new Error(`Property ${table} does not exist in JSON DB`);
    }

    this.query = data;

    return this;
  }
}

export const db = (filePath) => new DB(filePath);
