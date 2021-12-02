import fs from "fs";
import { getAbsPath } from "./getAbsPath.js";

export const appendFile = (filePath, data, encoding = "utf8", options = {}) =>
  fs.promises.appendFile(getAbsPath(filePath), data, { encoding, ...options });
