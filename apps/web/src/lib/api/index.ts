import axios, { AxiosInstance, AxiosResponse } from "axios";

import { CONFIG } from "@/config";
import { toastError } from "@/hooks/use-toast";

import { RequestData, RequestParams } from "./index.types";

const apiClient: AxiosInstance = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    toastError(error.response?.data?.errors || "An error occurred");
    return Promise.reject(error);
  },
);

class BaseService {
  async get<T>(endpoint: string, params: RequestParams = {}): Promise<T> {
    const response: AxiosResponse<T> = await apiClient.get(endpoint, {
      params,
    });

    return response.data;
  }

  async post<T>(endpoint: string, data: RequestData): Promise<T> {
    const response: AxiosResponse<T> = await apiClient.post(endpoint, data);
    return response.data;
  }

  async put<T>(endpoint: string, data: RequestData): Promise<T> {
    const response: AxiosResponse<T> = await apiClient.put(endpoint, data);
    return response.data;
  }

  async delete<T>(endpoint: string): Promise<T> {
    const response: AxiosResponse<T> = await apiClient.delete(endpoint);
    return response.data;
  }
}

export default BaseService;
