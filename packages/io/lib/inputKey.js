import readlineSync from "readline-sync";

export const inputKey = (prompt, limit = null, limitMessage = null) =>
  readlineSync.keyIn(prompt, { limit, limitMessage });
