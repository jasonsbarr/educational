export class DivideByZeroError extends Error {
  constructor() {
    super("Cannot divide by zero");
  }
}
