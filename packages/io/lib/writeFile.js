import fs from "fs";
import { getAbsPath } from "./getAbsPath.js";

export const writeFile = (filePath, data, encoding = "utf8", options = {}) =>
  fs.promises.writeFile(getAbsPath(filePath), data, { encoding, ...options });
