import fs from "fs";
import { getAbsPath } from "./getAbsPath.js";

export const appendFileSync = (
  filePath,
  data,
  encoding = "utf8",
  options = {}
) => fs.appendFileSync(getAbsPath(filePath), data, { encoding, ...options });
