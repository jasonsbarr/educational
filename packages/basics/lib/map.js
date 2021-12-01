import { head } from "./head.js";
import { prepend } from "./prepend.js";
import { tail } from "./tail.js";

export const map = (fn, arr) =>
  arr.length === 0 ? [] : prepend(fn(head(arr)), map(fn, tail(arr)));
