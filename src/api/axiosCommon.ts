import axios, { AxiosError } from "axios";

import { store } from "../store";

const axiosClient = axios.create({ baseURL: process.env.SERVER_URL + "/api", withCredentials: true });

export default axiosClient;
