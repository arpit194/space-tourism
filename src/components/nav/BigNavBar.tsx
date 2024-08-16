import NavItem from "./NavItem";

const BigNavBar = () => {
  return (
    <div
      className="hidden sm:flex items-center justify-evenly pl-20 absolute top-0 right-0 h-full bg-white/10 backdrop-blur-xl 
                    md:w-5/6 lg:w-1/2 lg:after:content-[''] lg:after:h-[1px] lg:after:w-3/4 lg:after:absolute lg:after:-left-2/3 lg:after:top-1/2 lg:after:bg-foreground/25"
    >
      <NavItem path="/" itemIndex={"00"} itemName={"HOME"} />
      <NavItem
        path="/destinations"
        itemIndex={"01"}
        itemName={"DESTINATIONS"}
      />
      <NavItem path="/crew" itemIndex={"02"} itemName={"CREW"} />
      <NavItem path="/technology" itemIndex={"03"} itemName={"TECHNOLOGY"} />
    </div>
  );
};

export default BigNavBar;
