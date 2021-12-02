import fs from "fs";
import { getAbsPath } from "./getAbsPath.js";

export const writeFileSync = (
  filePath,
  data,
  encoding = "utf8",
  options = {}
) => fs.writeFileSync(getAbsPath(filePath), data, { encoding, ...options });
