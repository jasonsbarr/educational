import readlineSync from "readline-sync";

export const inputWithDefault = (prompt, defaultInput) =>
  readlineSync.question(prompt, { defaultInput });
