import { head } from "./head.js";
import { ignore } from "./ignore.js";
import { tail } from "./tail.js";

export const each = (fn, arr) =>
  arr.length === 0
    ? null
    : ignore(() => {
        fn(head(arr));
        each(fn, tail(arr));
      });
