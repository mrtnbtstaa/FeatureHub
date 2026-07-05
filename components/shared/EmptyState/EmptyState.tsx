import Image from "next/image";

type EmptyProps = {
  headLine: string;
  body: string;
};

const EmptyState = ({ headLine, body }: EmptyProps) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-8 text-center">
      <Image
        src={"/no-data.png"}
        alt="no data"
        width={200}
        height={200}
        loading="eager"
      />
      <div className="text-center">
        <h2 className="text-3xl tracking-wide font-bold">{headLine}</h2>
        <p className="text-gray-600 text-lg font-medium tracking-wider">
          {body}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
