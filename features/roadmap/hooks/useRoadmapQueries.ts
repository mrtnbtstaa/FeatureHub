import { useForm } from "react-hook-form";
import { CommentInput, commentSchema } from "../schemas/comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UUID } from "node:crypto";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CommentData } from "@/types/CommentData";
import { RoadmapClientService } from "../services/roadmap.client";
import { ApiResponse } from "@/lib/api/api.response";

export const useSaveComment = (featureId: UUID) => {
  const queryClient = useQueryClient();
  const form = useForm<CommentInput>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      commentInput: "",
    },
  });

  const { handleSubmit, reset } = form;

  const createMutation = useMutation({
    mutationFn: ({
      data,
      featureId,
    }: {
      data: CommentInput;
      featureId: UUID;
    }) => RoadmapClientService.saveComment(data, featureId),
    onSuccess: () => {
      // Automatically refetch the comment list cache for this specific feature item
      queryClient.invalidateQueries({
        queryKey: ["comments", featureId],
      });
      // Clear form inputs on success
      reset();
    },
  });

  const onCommentSubmit = async (data: CommentInput) => {
    createMutation.mutate({ data, featureId });
  };

  return {
    form,
    handleCommentSubmit: handleSubmit(onCommentSubmit),
    isSubmitting: createMutation.isPending,
    // errors: createMutation.error,
  };
};

export const useGetComments = (featureId: UUID) => {

  const { data, isLoading, error, isFetching } = useQuery<ApiResponse<CommentData[]>>({
    queryKey: ["comments", featureId],
    queryFn: async () => await RoadmapClientService.getComments(featureId),
    // Prevent fetch triggers if featureId is missing or empty
    enabled: !!featureId,
    staleTime: 1000 * 60 * 5, // Caching duration (5 minutes),
  });
  
  console.log(`UseGetComments Data: ${JSON.stringify(data)}`)

  return {
    data,
    isLoading,
    isFetching,
    error: error ? error.message || "Unknown error" : null,
  };
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id: UUID) => {
      const result =
        await RoadmapClientService.deleteComment(id);
      if (!result?.success)
        throw new Error(result?.message || "Failed to delete");
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return {
    deleteComment: deleteMutation.mutate,
    isDeleting: deleteMutation.isPending,
  };
};
