import { stringify } from "./stringify.js";

export const println = (...args) => console.log(stringify(...args));
