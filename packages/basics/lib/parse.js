export const parse = (json) => {
  try {
    return JSON.parse(json);
  } catch (_) {
    return json;
  }
}