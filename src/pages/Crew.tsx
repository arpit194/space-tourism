import CrewInfo from "@/components/crew/CrewInfo";
import { Typography } from "@/components/Typography";

const Crew = () => {
  return (
    <div
      className="w-screen h-lvh  
        bg-[url('./images/crew/background-crew-mobile.jpg')] 
        sm:bg-[url('./images/crew/background-crew-tablet.jpg')] 
        lg:bg-[url('./images/crew/background-crew-desktop.jpg')] 
        bg-no-repeat bg-cover 
        flex flex-col items-center gap-16 text-white pt-28 px-6 sm:pt-40 sm:gap-6 xl:px-96 xl:pt-56"
    >
      <Typography variant={"preset6"} className="uppercase sm:w-full">
        <span className="font-bold text-grey">02</span>
        &nbsp;&nbsp;meet your crew
      </Typography>
      <CrewInfo />
    </div>
  );
};

export default Crew;
