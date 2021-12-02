import { writeFileSync } from "./writeFileSync.js";

export const writeLinesSync = (
  filePath,
  lines,
  encoding = "utf8",
  options = {}
) => {
  let lineSep = "\n";

  if (process.platform === "win32") {
    lineSep = "\r\n";
  }

  return writeFileSync(filePath, lines.join(lineSep), encoding, options);
};
