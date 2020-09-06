import Axios from "axios";
import config from "../config/api";

const api = Axios.create({
  baseURL: config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default api;
