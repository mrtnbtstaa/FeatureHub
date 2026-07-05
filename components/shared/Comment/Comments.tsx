import { MdComment } from "react-icons/md";

const Comments = ({ commentCount }: { commentCount: number | string }) => {
  return (
    <div className="flex items-center gap-2">
      <MdComment />
      <span className="text-gray-600 tracking-wider font-medium">
        {commentCount} Comments
      </span>
    </div>
  );
};

export default Comments;
