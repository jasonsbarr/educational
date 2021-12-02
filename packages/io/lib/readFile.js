import fs from "fs";
import { getAbsPath } from "./getAbsPath.js";

export const readFile = (filePath, encoding = "utf8", options = {}) =>
  fs.promises.readFile(getAbsPath(filePath), { encoding, ...options });
