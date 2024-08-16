import Destination from "@/components/destinations/Destination";
import { Typography } from "@/components/Typography";

const Destinations = () => {
  return (
    <div
      className="w-screen h-lvh
        bg-[url('images/destination/background-destination-mobile.jpg')] 
        sm:bg-[url('images/destination/background-destination-tablet.jpg')] 
        lg:bg-[url('images/destination/background-destination-desktop.jpg')]
        bg-no-repeat bg-cover
        flex flex-col items-center gap-4 text-white pt-28 px-6 pb-6 sm:pt-40 sm:gap-6 xl:px-96 xl:pt-56"
    >
      <Typography variant={"preset6"} className="uppercase sm:w-full">
        <span className="font-bold text-grey">01</span>
        &nbsp;&nbsp;pick your destination
      </Typography>
      <Destination />
    </div>
  );
};

export default Destinations;
