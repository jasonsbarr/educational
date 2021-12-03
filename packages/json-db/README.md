# `@jasonsbarr/json-db`

Simple JSON file-based database with a fluent query API.

## Usage

```js
import { Db } from "@jasonsbarr/json-db";
```

### Creating a database

In file.json:

```js
{
    "users": [],
    "companies": []
}
```

```js
const entities = {
    user: "users",
    company: "companies"
}

const db = Db("path/to/file.json", { entities });
```

### Fetching records

```js
const users = from("users")
    .select()
    .where("joinDate", ">", new Date("January 1, 2015").getTime())
    .include("organization")
    .get();
```

### Inserting records

Unique IDs are generated automatically on insertion. IDs are UUID v4.


```js
const newCompany1 = {
    name: "Acme Inc.",
    founded: 1955
};

const newCompany2 = {
    name: "Umbrella Corporation",
    founded: 1968
}

const rows = into("companies")
    .insert(newCompany1)
    .insert(newCompany2)
    .write();
```

### Updating records

```js
const rows = from("companies")
    .updateWhere("founded", "<", 1970)
    .set({ old: true })
    .write();
```

### Deleting records

```js
const rows = from("users")
    .delete("0803d10b-6f50-4e40-b9e7-e107466c65ac")
    .write();
```
