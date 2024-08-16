import { useEffect, useState } from "react";
import { technology } from "@/lib/data.json";
import { Typography } from "../Typography";
import { changeSlideIndex } from "@/lib/utils";
import { m, LazyMotion, domAnimation } from "framer-motion";

const TechnologyInfo = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [touchX, setTouchX] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (selectedIndex === technology.length - 1) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(selectedIndex + 1);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [selectedIndex]);

  const checkSwipe = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchX > e.changedTouches[0].clientX) {
      changeSlideIndex(
        "increase",
        setSelectedIndex,
        technology.length,
        selectedIndex
      );
    } else {
      changeSlideIndex(
        "decrease",
        setSelectedIndex,
        technology.length,
        selectedIndex
      );
    }
    setTouchX(0);
  };

  return (
    <div className="flex flex-col w-full pt-10 gap-5 overflow-hidden sm:gap-10 lg:flex-row-reverse">
      <LazyMotion features={domAnimation}>
        <div className="w-full h-64 sm:h-96  overflow-hidden lg:hidden">
          <m.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            key={selectedIndex}
            src={technology[selectedIndex].images.landscape}
            alt={technology[selectedIndex].name}
            className="w-full h-full object-cover"
            onTouchStart={(e) => setTouchX(e.changedTouches[0].clientX)}
            onTouchEnd={checkSwipe}
          />
        </div>
      </LazyMotion>
      <LazyMotion features={domAnimation}>
        <div className="w-full h-[30rem] xl:h-[40rem] overflow-hidden hidden lg:block xl:flex">
          <m.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            key={selectedIndex}
            src={technology[selectedIndex].images.portrait}
            alt={technology[selectedIndex].name}
            className="w-full h-full xl:w-5/6 xl:ml-auto object-cover"
            onTouchStart={(e) => setTouchX(e.changedTouches[0].clientX)}
            onTouchEnd={checkSwipe}
          />
        </div>
      </LazyMotion>
      <div className="flex flex-col w-full gap-5 sm:gap-10 lg:flex-row">
        <div className="flex gap-5 w-full justify-center sm:gap-10 lg:flex-col lg:w-max">
          <button
            className={`size-10 rounded-full border-[1px] border-grey flex justify-center items-center sm:size-16 ${
              selectedIndex === 0 ? "bg-white text-grey" : ""
            }`}
            onClick={() => setSelectedIndex(0)}
          >
            <Typography variant={"preset4"}>1</Typography>
          </button>
          <button
            className={`size-10 rounded-full border-[1px] border-grey flex justify-center items-center sm:size-16 ${
              selectedIndex === 1 ? "bg-white text-grey" : ""
            }`}
            onClick={() => setSelectedIndex(1)}
          >
            <Typography variant={"preset4"}>2</Typography>
          </button>
          <button
            className={`size-10 rounded-full border-[1px] border-grey flex justify-center items-center sm:size-16 ${
              selectedIndex === 2 ? "bg-white text-grey" : ""
            }`}
            onClick={() => setSelectedIndex(2)}
          >
            <Typography variant={"preset4"}>3</Typography>
          </button>
        </div>
        <div className="flex flex-col w-full text-center sm:gap-2 lg:justify-center lg:text-left">
          <Typography variant={"preset4"} className="text-grey uppercase">
            the terminology...
          </Typography>
          <Typography
            variant={"preset3"}
            className="uppercase md:text-[2.5rem]"
          >
            {technology[selectedIndex].name}
          </Typography>
          <Typography
            variant={"preset9"}
            className="text-foreground px-10 sm:px-48 lg:px-0"
          >
            {technology[selectedIndex].description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TechnologyInfo;
