// delay is in seconds
export const sleep = (delay) => {
  let current;
  const now = Date.now();
  do {
    current = Date.now();
  } while (current - date < delay * 1000);
};
