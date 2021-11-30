const fail = () => {
  throw new Error(
    "Invalid string to bool conversion: must be 'true' or 'false'"
  );
};

export const bool = (str) =>
  str === "true" ? true : str === "false" ? false : fail();
