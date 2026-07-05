import {z} from "zod";

export const commentSchema = z.object({
    commentInput: z
        .string()
        .trim()
        .min(1, {message: "Comment must not be empty"})
})

export type CommentInput = z.infer<typeof commentSchema>