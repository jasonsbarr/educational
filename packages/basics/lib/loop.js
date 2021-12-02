// interval is in seconds
export const loop = (fn, { interval = 0, times = Infinity } = {}) => {
  let iters = 0;
  let intv = setInterval(() => {
    if (iters === times) {
      clearInterval(intv);
    }

    fn();
    iters++;
  }, interval * 1000);
};
