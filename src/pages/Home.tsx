import { Typography } from "@/components/Typography";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="w-screen h-lvh  
        bg-[url('./images/home/background-home-mobile.jpg')] 
        sm:bg-[url('./images/home/background-home-tablet.jpg')] 
        lg:bg-[url('./images/home/background-home-desktop.jpg')] 
        bg-no-repeat bg-cover px-6 pt-40 pb-24 md:px-32 md:pb-36 md:pt-56 lg:px-40 lg:py-32"
    >
      <div className="w-full h-full flex flex-col items-center justify-between lg:flex-row lg:items-end">
        <div className="flex flex-col text-foreground p-5 items-center text-center lg:items-start lg:w-1/2">
          <Typography variant={"preset5"} className="uppercase">
            So, you want to travel to
          </Typography>
          <Typography variant={"preset1"} className="text-white uppercase">
            space
          </Typography>
          <Typography
            variant={"preset9"}
            className="leading-loose lg:text-left xl:leading-relaxed"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Typography>
        </div>
        <Link
          to="/destinations"
          className="w-36 h-36 rounded-full bg-white grid place-items-center md:w-64 md:h-64"
        >
          <Typography variant={"preset4"} className="uppercase">
            Explore
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default Home;
