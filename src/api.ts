import axios, { AxiosInstance } from "axios";

export const api = () => {
  const apiInstance: AxiosInstance = axios.create({
    baseURL: "https://rebrickable.com/api/v3/lego",
    headers: {
      "Content-Type": "application/json",
    },
  });

  apiInstance.interceptors.request.use((config) => {
    const apiKey = "key 9d5e3d50f88cc2b361af6400d1579127";
    config.headers.Authorization = apiKey;
    return config;
  });

  return apiInstance;
};
