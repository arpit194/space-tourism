import { Typography } from "../Typography";
import { destinations } from "@/lib/data.json";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Destination = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (selectedIndex === destinations.length - 1) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(selectedIndex + 1);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [selectedIndex]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col items-center justify-start gap-4 lg:flex-row lg:px-20 lg:justify-between lg:flex-[1]">
        <m.img
          initial={{ rotate: -30, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          key={selectedIndex}
          src={destinations[selectedIndex].images.png}
          alt={destinations[selectedIndex].name}
          className="size-36 object-cover sm:size-80 sm:my-10 lg:size-96 xl:size-[40rem]"
        />
        <div className="flex flex-col gap-4 items-center lg:items-start lg:w-1/2">
          <div className="flex justify-evenly items-center w-full sm:w-1/2 lg:justify-between">
            <Typography
              variant={"preset8"}
              className={`uppercase pb-2 border-b-2 border-transparent cursor-pointer hover:border-white/50 ${
                selectedIndex === 0
                  ? "text-white border-white hover:border-white"
                  : ""
              }`}
              onClick={() => setSelectedIndex(0)}
            >
              moon
            </Typography>
            <Typography
              variant={"preset8"}
              className={`uppercase pb-2 border-b-2 border-transparent cursor-pointer hover:border-white/50 ${
                selectedIndex === 1
                  ? "text-white border-white hover:border-white"
                  : ""
              }`}
              onClick={() => setSelectedIndex(1)}
            >
              mars
            </Typography>
            <Typography
              variant={"preset8"}
              className={`uppercase pb-2 border-b-2 border-transparent cursor-pointer hover:border-white/50 ${
                selectedIndex === 2
                  ? "text-white border-white hover:border-white"
                  : ""
              }`}
              onClick={() => setSelectedIndex(2)}
            >
              europia
            </Typography>
            <Typography
              variant={"preset8"}
              className={`uppercase pb-2 border-b-2 border-transparent cursor-pointer hover:border-white/50 ${
                selectedIndex === 3
                  ? "text-white border-white hover:border-white"
                  : ""
              }`}
              onClick={() => setSelectedIndex(3)}
            >
              titan
            </Typography>
          </div>

          <div className="w-full flex flex-col text-center pb-6 border-b-2 border-foreground/25 sm:w-2/3 lg:text-start lg:w-full">
            <Typography variant={"preset2"} className="uppercase">
              {destinations[selectedIndex].name}
            </Typography>
            <Typography
              variant={"preset9"}
              className="text-foreground leading-relaxed px-5 lg:px-0"
            >
              {destinations[selectedIndex].description}
            </Typography>
          </div>
          <div className="flex flex-col gap-2 sm:w-2/3 sm:flex-row sm:justify-around lg:justify-start lg:gap-10 lg:w-full">
            <div className="flex flex-col text-center gap-2 lg:text-start">
              <Typography variant={"preset7"} className="uppercase">
                avg. distance
              </Typography>
              <Typography
                variant={"preset6"}
                className="uppercase text-[1.75rem] font-bellefair"
              >
                {destinations[selectedIndex].distance}
              </Typography>
            </div>
            <div className="flex flex-col text-center gap-2">
              <Typography variant={"preset7"} className="uppercase">
                est. travel time
              </Typography>
              <Typography
                variant={"preset6"}
                className="uppercase text-[1.75rem] font-bellefair"
              >
                {destinations[selectedIndex].travel}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Destination;
