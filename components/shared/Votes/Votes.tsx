import { TiArrowSortedUp } from "react-icons/ti";

const Votes = ({ voteCount }: { voteCount: number | string }) => {
  return (
    <div className="border border-[#c2c6d6] rounded-lg p-2 w-12 h-14 flex flex-col items-center justify-center">
      <TiArrowSortedUp />
      <span>{voteCount}</span>
    </div>
  );
};

export default Votes;
