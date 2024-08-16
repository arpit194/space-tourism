import { useEffect, useState } from "react";
import { crew } from "@/lib/data.json";
import { Typography } from "../Typography";
import { m, LazyMotion, domAnimation } from "framer-motion";

const CrewInfo = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex flex-col text-center items-center">
          <Typography variant={"preset4"} className="uppercase pb-2 text-grey">
            {crew[selectedIndex].role}
          </Typography>
          <Typography variant={"preset3"} className="uppercase pb-6">
            {crew[selectedIndex].name}
          </Typography>
          <Typography
            variant={"preset9"}
            className="text-foreground px-10 h-40"
          >
            {crew[selectedIndex].bio}
          </Typography>
          <div className="flex justify-center items-center gap-4">
            <button
              className={`size-[0.63rem] rounded-full ${
                selectedIndex === 0 ? "bg-white" : "bg-grey"
              }`}
              onClick={() => setSelectedIndex(0)}
            />
            <button
              className={`size-[0.63rem] rounded-full ${
                selectedIndex === 1 ? "bg-white" : "bg-grey "
              }`}
              onClick={() => setSelectedIndex(1)}
            />
            <button
              className={`size-[0.63rem] rounded-full ${
                selectedIndex === 2 ? "bg-white" : "bg-grey "
              }`}
              onClick={() => setSelectedIndex(2)}
            />
            <button
              className={`size-[0.63rem] rounded-full ${
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
          src={crew[selectedIndex].images.png}
          alt={crew[selectedIndex].name}
          className="size-72 object-contain sm:size-80 sm:my-10 lg:size-96 xl:size-[40rem] mx-auto"
        />
      </div>
    </LazyMotion>
  );
};

export default CrewInfo;
