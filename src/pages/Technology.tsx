import TechnologyInfo from "@/components/technology/TechnologyInfo";
import { Typography } from "@/components/Typography";

const Technology = () => {
  return (
    <div
      className="w-screen h-lvh
    bg-[url('/images/technology/background-technology-mobile.jpg')] 
    sm:bg-[url('/images/technology/background-technology-tablet.jpg')] 
    lg:bg-[url('/images/technology/background-technology-desktop.jpg')]
    bg-no-repeat bg-cover
    flex flex-col items-center gap-4 text-white pt-28 pb-6 sm:pt-40 sm:gap-6 lg:pl-28 xl:pt-48"
    >
      <Typography
        variant={"preset6"}
        className="uppercase sm:w-full sm:pl-6 lg:pl-20"
      >
        <span className="font-bold text-grey">03</span>
        &nbsp;&nbsp;space launch 101
      </Typography>
      <TechnologyInfo />
    </div>
  );
};

export default Technology;
