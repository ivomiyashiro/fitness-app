import axios, { AxiosInstance, AxiosResponse } from "axios";

import { CONFIG } from "@/config";
import { toastError } from "@/hooks/use-toast";

import { RequestData, QueryParams } from "./index.types";

const sanitizeParams = (params?: QueryParams) => {
  const { limit, offset, ...rest } = params || {};

  const filteredUndefinedValues = Object.entries(rest).reduce(
    (acc, [key, value]) => {
      if (value !== null && value !== undefined) {
        acc[key] = value;
      }
      return acc;
    },
    {} as Record<string, unknown>,
  );

  return {
    ...filteredUndefinedValues,
    limit: limit || CONFIG.API.LIMIT,
    offset: offset || CONFIG.API.OFFSET,
  };
};

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
  async get<T>(endpoint: string, params?: QueryParams): Promise<T> {
    const response: AxiosResponse<T> = await apiClient.get(endpoint, {
      params: sanitizeParams(params),
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
