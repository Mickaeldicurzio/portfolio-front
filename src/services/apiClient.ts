import axios from "axios";

const baseUrl = process.env.VUE_APP_API_BASE_URL
  ? process.env.VUE_APP_API_BASE_URL
  : window.location.origin;

const instanceApi = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default instanceApi;
