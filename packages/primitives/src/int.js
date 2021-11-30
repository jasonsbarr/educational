const fail = () => {
  throw new Error("Invalid string to int conversion");
};

export const int = (str) =>
  String(parseInt(str)) === str && !Number.isNaN(parseInt(str))
    ? parseInt(str)
    : fail();
