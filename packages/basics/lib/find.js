import { head } from "./head.js";
import { tail } from "./tail.js";

export const find = (pred, arr) =>
  arr.length === 0 ? null : pred(head(arr)) ? head(arr) : find(pred, tail(arr));
