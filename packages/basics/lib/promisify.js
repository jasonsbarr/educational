export const promisify =
  (func) =>
  (...args) =>
    new Promise((resolve, reject) => {
      func(...args, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
