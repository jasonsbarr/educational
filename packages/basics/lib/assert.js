export const assert = (expr, msg) => {
  if (expr === true) {
    return true;
  }
  throw new Error("Assertion failed: " + msg);
};
