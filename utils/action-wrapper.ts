import { translateToHttpErrors } from "./errors/translator";

export type ActionResponse<T> =
  | { success: true; status: 200; message: string; data: T }
  | { success: false; status: number; message: string; data: null };

export function createSafeAction<Args extends unknown[], T>(
  context: string,
  inputs: (...args: Args) => Promise<T>,
) {
    return async (...args: Args): Promise<ActionResponse<T>> => {
        try{
            const data = await inputs(...args);
            return {
                success: true,
                status: 200,
                message: `${context} successfully`,
                data: data
            }
        }catch(error){
            const translated = translateToHttpErrors(error);
            return {
                ...translated,
                data: null
            }
        }
    }
}
