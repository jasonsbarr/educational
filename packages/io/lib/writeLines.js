import { writeFile } from "./writeFile.js";

export const writeLines = async (
  filePath,
  lines,
  encoding = "utf8",
  options = {}
) => {
  let lineSep = "\n";

  if (process.platform === "win32") {
    lineSep = "\r\n";
  }

  return await writeFile(filePath, lines.join(lineSep), encoding, options);
};
