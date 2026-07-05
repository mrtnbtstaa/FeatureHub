import { createClient } from "../supabase/client/client";
import { ApiResponse } from "./api.response";
import { parseApiResponse } from "./response.parser";

export async function apiClient<T>(
  method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE",
  url: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {


  const headers: Record<string, string> = {
    ...(options.body ? { "Content-Type": "application/json" } : {}),
    ...((options.headers as Record<string, string>) || {}),
  };

  const supabase = await createClient();
  const {data: { session }} = await supabase.auth.getSession();

  console.log(`Access token: ${session?.access_token}`);

  if(session?.access_token){
    headers["Authorization"] = `Bearer ${session.access_token}`;
  }

  const response = await fetch(url, {
    ...options,
    method,
    headers,
  });
  return parseApiResponse<T>(response);
}
