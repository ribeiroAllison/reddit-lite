import axios from "axios";

const apiUrl = "https://www.reddit.com";

const API = axios.create({
  baseURL: `${apiUrl}`,
});

export default API;
