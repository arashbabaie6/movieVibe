// API_KEY bb7279b8f7e00a98c2907da763ad0245
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: "bb7279b8f7e00a98c2907da763ad0245" },
});

export default instance;
