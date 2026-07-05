"use clent";

import Avatar from "@/components/shared/Avatar/Avatar";
import Button from "@/components/ui/Button/Button";
import { CommentData } from "@/types/CommentData";
import { formatTime } from "@/lib/utils";
import { AiFillLike } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

type CommentProps = {
  comment: CommentData;
  onDelete: () => void;
};

const CommentCard = ({ comment, onDelete }: CommentProps) => {
  return (
    <div className="mt-4 group rounded-lg flex gap-4 items-start hover:bg-[#f2f3ff] hover:border-[#ccd0de] duration-200 transition-colors p-4">
      <Avatar src={comment.user.profile.avatarUrl ?? "/martin.jpg"} alt="profile" width={32} height={32} />
      <div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h3>{comment.user.name}</h3>
            <span className="text-xs text-gray-600 tracking-wide leading-none">
              {formatTime(comment.createdAt)}
            </span>
          </div>
          <form onSubmit={onDelete} className="text-right">
            <Button
              type="submit"
              variant="danger"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <BiTrash className="text-lg" />
            </Button>
          </form>
        </div>
        <p>{comment.message}</p>
        <div className="mt-4 flex items-center gap-4">
          <div className="inline-flex items-center space-x-1">
            <Button variant="none">
              <AiFillLike className="text-gray-600 text-lg" />
            </Button>
            <span className="text-xs">4</span>
          </div>
          <Button variant="none" className="text-gray-700 text-sm font-medium">
            Reply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
