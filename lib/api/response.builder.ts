import { ApiResponse } from "./api.response";

export function successResponse<T>(
  message: string = "Success",
  data?: T,
): ApiResponse<T> {
  return {
    success: true,
    message: message,
    data: data,
  };
}

export function errorResponse(message: string) {
  return {
    success: false,
    message: message,
  };
}
