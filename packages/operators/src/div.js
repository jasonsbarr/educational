import { DivideByZeroError } from "./internal/DivideByZeroError.js";

export const div = (a, b) => {
  if (b === 0) {
    throw new DivideByZeroError();
  }

  return a / b;
};
