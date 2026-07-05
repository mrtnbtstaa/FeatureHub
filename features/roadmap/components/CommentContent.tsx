"use client";

import Avatar from "@/components/shared/Avatar/Avatar";
import Card from "@/components/shared/Card/Card";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import CommentCard from "./CommentCard";
import { useParams } from "next/navigation";
import { UUID } from "node:crypto";
import { useDeleteComment, useGetComments, useSaveComment } from "../hooks/useRoadmapQueries";
import EmptyState from "@/components/shared/EmptyState/EmptyState";
import { MdOutlineComment } from "react-icons/md";

const CommentContent = () => {

  const { id } = useParams<{ id: UUID }>();

  const {data: comments, isLoading, isFetching} = useGetComments(id);
  const { form, handleCommentSubmit, isSubmitting } = useSaveComment(id);
  const { deleteComment, isDeleting } = useDeleteComment();


  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      <h2 className="text-2xl font-bold tracking-wide my-8">
        Comments ({comments?.length})
      </h2>
      <Card className="p-8 flex gap-2 items-start">
        <Avatar src={"/martin.jpg"} alt="profile" width={48} height={48} />
        <div className="flex items-center justify-between w-full h-full">
          <form
            onSubmit={handleCommentSubmit}
            className="flex items-center justify-between w-full"
          >
            <Input
              placeholder="Write a comment..."
              variant="none"
              className="h-full p-4 whitespace-pre-line text-wrap"
              {...register("commentInput")}
            />
            <Button className="whitespace-nowrap">Post Comment</Button>
          </form>
        </div>
      </Card>
      <h1>{errors.commentInput?.message}</h1>
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            onDelete={() => deleteComment(comment.id as UUID)}
          />
        ))
      ) : (
        <EmptyState headLine="No comments" body="There are currently no comments on this post. Feel free to leave one." />
      )}
    </>
  );
};

export default CommentContent;
