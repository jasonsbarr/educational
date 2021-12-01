import { head } from "./head.js";
import { tail } from "./tail.js";

export const reduce = (fn, acc, arr) =>
  arr.length === 0 ? acc : reduce(fn, fn(acc, head(arr)), tail(arr));
