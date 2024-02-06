import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://test.gefara.xyz/api/v1";

export const BaseAxiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
