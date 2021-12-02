import readlineSync from "readline-sync";

export const inputChoice = (choices, prompt) =>
  readlineSync.keyInSelect(choices, prompt);
