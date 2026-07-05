import Footer from "@/components/layout/Footer";
import { LuNetwork } from "react-icons/lu";

const AuthContent = () => {
  return (
    <div className="lg:flex flex-col w-1/2 justify-between items-start p-4 hidden">
      <div className="flex flex-col gap-8">
        <div className="inline-flex items-center gap-2">
          <div className="rounded-lg p-2 bg-[#d8e2ff]">
            <LuNetwork className="text-lg md:text-2xl text-[#384cd0]" />
          </div>
          <h1 className="text-lg md:text-2xl tracking-wide font-semibold text-white">
            FeatureHub
          </h1>
        </div>
        <h2 className="font-extrabold text-3xl md:text-5xl tracking-wide text-white">
          Help us build the products you love.
        </h2>
        <p className="text-white tracking-wide text-md md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          molestiae, debitis deserunt officia perferendis reiciendis pariatur
          cupiditate nisi odio, culpa alias recusandae facilis consectetur
          quaerat sit blanditiis omnis autem doloremque expedita placeat porro
          eos? Ullam dolore eaque at, officiis dicta vitae rerum mollitia saepe
          odio temporibus, commodi laboriosam iure totam.
        </p>
      </div>
      <div className="fixed bottom-0 my-4">
        <Footer />
      </div>
    </div>
  );
};

export default AuthContent;
