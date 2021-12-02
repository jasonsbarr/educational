import { stringify } from "./stringify.js";

export const print = (...args) => {
  const prStr = stringify(...args);

  if (process && process.stdout) {
    process.stdout.write(prStr);
  } else {
    // same as println in browser
    console.log(prStr);
  }
};
