import { randomUUID } from "crypto";
import { createClient } from "./supabase/server/server";

export async function uploadImage(file: File) : Promise<string> {

    const extension = file.name.split(".").pop(); // Get the extension from the file

    const fileName = `${randomUUID()}.${extension}`;

    const supabase = await createClient();

    // Upload file from the storage
    const {error} = await supabase
        .storage
        .from("feature-images")
        .upload(fileName, file);

    console.error(error?.message)

    if(error) throw new Error(error.message);

    // Get the public url of the file uploaded
    const {data} = supabase
        .storage
        .from("feature-images")
        .getPublicUrl(fileName)

    // Return the public url of the file
    return data.publicUrl;

}