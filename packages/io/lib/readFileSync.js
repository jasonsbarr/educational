import fs from "fs";
import { getAbsPath } from "./getAbsPath.js";

export const readFileSync = (filePath, encoding = "utf8", options = {}) =>
  fs.readFileSync(getAbsPath(filePath), { encoding, ...options });
