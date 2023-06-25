import TextContentTitle from "./TextContent/TextContentTitle";
import expBanner from "../../asserts/experience-section/experience-banner.png";
import expSvg from "../../asserts/experience-section/exp-shape.svg";
const Experience = function () {
  return (
    <div className="bg-primary pt-16 flex px-16">
      <div className="relative w-fit">
        <img src={expBanner} alt="banner" className="h-[32rem]" />
        <img
          src={expSvg}
          alt=""
          className="absolute bottom-24 -left-5 rounded-2xl h-40 shadow-xl"
        />
      </div>
      <TextContentTitle />
    </div>
  );
};

export default Experience;
