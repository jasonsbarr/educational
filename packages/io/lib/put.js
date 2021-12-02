import axios from "axios";

export const put = (url, data, config = {}) => axios.put(url, data, config);
