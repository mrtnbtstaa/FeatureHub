import Card from "@/components/shared/Card/Card";

const BoardStatistics = () => {
    return (
        <Card className="rounded-2xl p-4 space-y-4" variants="secondary" withHover={false}>
          <h2>Board Statistics</h2>
          <div className="flex items-center gap-4 w-full">
            <div className="bg-white border border-[#c2c6d6] rounded-2xl w-full p-4">
              <h3 className="tracking-wide text-gray-700 font-medium">
                Active Requests
              </h3>
              <span className="text-[#384cd0] text-3xl font-bold tracking-wide">
                24
              </span>
            </div>
            <div className="bg-white border border-[#c2c6d6] rounded-2xl w-full p-4">
              <h3 className="tracking-wide text-gray-700 font-medium">
                Total Votes
              </h3>
              <span className="text-[#384cd0] text-3xl font-bold tracking-wide">
                24
              </span>
            </div>
          </div>
        </Card>
    );
}

export default BoardStatistics;