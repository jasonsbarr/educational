const fail = () => {
  throw new Error("Invalid conversion to null: value must be 'null'");
};

export const nil = (str) => (str === "null" ? null : fail());
