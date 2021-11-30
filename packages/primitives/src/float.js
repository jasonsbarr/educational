const fail = () => {
  throw new Error("Invalid string to float conversion");
};

export const float = (str) =>
  String(parseFloat(str)) === str && !Number.isNaN(parseFloat(str))
    ? parseFloat(str)
    : fail();
