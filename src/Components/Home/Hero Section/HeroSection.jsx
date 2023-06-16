import HeroSectionText from "./HeroSectionText";
import heroSectionBanner from "../../../asserts/home-setion/hero-banner.png";
const HeroSection = function () {
  return (
    <main className="flex max-w-6xl mt-12 px-16 justify-between">
      <HeroSectionText />
      <img
        src={heroSectionBanner}
        alt="hero section banner"
        className="h-[34rem]"
      />
    </main>
  );
};
export default HeroSection;
