import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export function createApi() {
  return axios.create({
    baseURL: API_URL,
  });
}
