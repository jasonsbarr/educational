export const compose = (f, g) => (arg) => g(f(arg));
