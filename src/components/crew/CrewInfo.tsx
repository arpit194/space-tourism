import { useEffect, useState } from "react";
import { crew } from "@/lib/data.json";
import { Typography } from "../Typography";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { changeSlideIndex } from "@/lib/utils";

const CrewInfo = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [touchX, setTouchX] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (selectedIndex === crew.length - 1) {
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
        crew.length,
        selectedIndex
      );
    } else {
      changeSlideIndex(
        "decrease",
        setSelectedIndex,
        crew.length,
        selectedIndex
      );
    }
    setTouchX(0);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col flex-1 justify-between lg:flex-row overflow-hidden">
        <div
          className="flex flex-col text-center items-center lg:text-start lg:items-start lg:pb-20 lg:px-20"
          onTouchStart={(e) => setTouchX(e.changedTouches[0].clientX)}
          onTouchEnd={checkSwipe}
        >
          <Typography variant={"preset4"} className="uppercase pb-2 text-grey">
            {crew[selectedIndex].role}
          </Typography>
          <Typography variant={"preset3"} className="uppercase pb-6">
            {crew[selectedIndex].name}
          </Typography>
          <Typography
            variant={"preset9"}
            className="text-foreground px-10 h-40 sm:px-36 lg:px-0"
          >
            {crew[selectedIndex].bio}
          </Typography>
          <div className="flex justify-center items-center gap-4 sm:gap-8 lg:mt-auto">
            <button
              className={`size-[0.63rem] sm:size-3 rounded-full ${
                selectedIndex === 0 ? "bg-white" : "bg-grey"
              }`}
              onClick={() => setSelectedIndex(0)}
            />
            <button
              className={`size-[0.63rem] sm:size-3 rounded-full ${
                selectedIndex === 1 ? "bg-white" : "bg-grey "
              }`}
              onClick={() => setSelectedIndex(1)}
            />
            <button
              className={`size-[0.63rem] sm:size-3 rounded-full ${
                selectedIndex === 2 ? "bg-white" : "bg-grey "
              }`}
              onClick={() => setSelectedIndex(2)}
            />
            <button
              className={`size-[0.63rem] sm:size-3 rounded-full ${
                selectedIndex === 3 ? "bg-white" : "bg-grey "
              }`}
              onClick={() => setSelectedIndex(3)}
            />
          </div>
        </div>
        <m.img
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          key={selectedIndex}
          src={crew[selectedIndex].images.webp}
          alt={crew[selectedIndex].name}
          className="size-72 object-contain sm:size-[30rem] xl:size-[40rem] mx-auto lg:mt-auto"
        />
      </div>
    </LazyMotion>
  );
};

export default CrewInfo;
