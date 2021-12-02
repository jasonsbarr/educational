// delay is in seconds
export const sleep = (delay) => {
  let current;
  const now = Date.now();
  do {
    current = Date.now();
  } while (current - now < delay * 1000);
};
