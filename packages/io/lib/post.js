import axios from "axios";

export const post = (url, data, config = {}) => axios.post(url, data, config);
