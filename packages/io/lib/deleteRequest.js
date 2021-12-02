import axios from "axios";

export const deleteRequest = (url, config = {}) => axios.delete(url, config);
