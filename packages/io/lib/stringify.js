export const stringify = (...args) => {
  let str = "";
  let i = 0;
  for (let arg of args) {
    str += util.inspect(arg, {
      showHidden: true,
      depth: null,
      showProxy: true,
    });
    if (i < args.length - 1) {
      str += " ";
    }
    i++;
  }
  return str;
};
