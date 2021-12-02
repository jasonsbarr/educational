import { readFile } from "./readFile.js";

export const readLines = async (filePath, encoding = "utf8") => {
  let lines = [];
  const file = await readFile(filePath, encoding);
  if (file.match(/\r\n/)) {
    lines = file.split("\r\n");
  } else if (file.match(/\u0085/)) {
    lines = file.split("\u0085");
  } else if (file.match(/\r/)) {
    lines = file.split("\r");
  } else {
    lines = file.split("\n");
  }
  return lines;
};
