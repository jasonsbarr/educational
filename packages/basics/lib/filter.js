import { head } from "./head.js";
import { prepend } from "./prepend.js";
import { tail } from "./tail.js";

export const filter = (pred, arr) =>
  arr.length === 0
    ? []
    : pred(head(arr))
    ? prepend(head(arr), filter(pred, tail(arr)))
    : filter(pred, tail(arr));
