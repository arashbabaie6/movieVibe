// API_KEY bb7279b8f7e00a98c2907da763ad0245
import axios from "axios";

const API_KEY = "bb7279b8f7e00a98c2907da763ad0245";
const BASE_URL = {
  default: "https://api.themoviedb.org/3/",
};

const instance = (baseURL = "default") =>
  axios.create({
    baseURL: BASE_URL[baseURL],
    params: { api_key: API_KEY },
  });

export default instance;
