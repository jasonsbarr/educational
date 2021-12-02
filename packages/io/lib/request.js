import axios from "axios";

export const request = (url, method = "get", data = {}, config = {}) =>
  axios({ url, method, data, ...config });
