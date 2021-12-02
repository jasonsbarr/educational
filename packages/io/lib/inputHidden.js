import readlineSync from "readline-sync";

export const inputHidden = (prompt) =>
  readlineSync.question(prompt, { hideEchoBack: true });
