# `@jasonsbarr/json-db`

Simple JSON file-based database with a fluent query API.

## Usage

```js
import { Db } from "@jasonsbarr/json-db";
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
