import { sleep } from "./sleep.js";
// interval is in seconds
export const loopSync = (fn, { interval = 0, times = Infinity } = {}) => {
  let iters = 0;

  while (iters < times) {
    sleep(interval);
    fn();
    iters++;
  }
};
