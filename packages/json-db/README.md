# `@jasonsbarr/json-db`

Simple JSON file-based database with a fluent query API.

## Usage

```js
import { Db } from "@jasonsbarr/json-db";

const users = from("users")
    .select()
    .where("joinDate", ">", new Date("January 1, 2015").getTime())
    .get();
```
