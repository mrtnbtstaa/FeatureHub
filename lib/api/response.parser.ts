import { ApiResponse } from "./api.response";

export async function parseApiResponse<T>(
  response: Response,
): Promise<ApiResponse<T>> {
  const body = await response.json();
  if (!response.ok) throw new Error(body.error ?? "Unexpected error");
  return body;
}
