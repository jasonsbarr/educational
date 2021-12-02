import { joinPath } from "./joinPath.js";
import { filenameWithPath } from "./filenameWithPath.js";

export const getAbsPath = (filePath) => {
  if (filePath.startsWith("./") || filePath.startsWith("../")) {
    filePath = joinPath(filenameWithPath(), filePath);
  }

  return filePath;
};
