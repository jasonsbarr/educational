import { assert } from "./assert.js";
import { equals } from "./equals.js";

export const assertEquals = (a, b) =>
  assert(
    equals(a, b),
    `Expected b to equal ${
      typeof a === "object" ? JSON.stringify(a, null, 2) : a
    }, got ${typeof b === "object" ? JSON.stringify(b, null, 2) : b}`
  );
