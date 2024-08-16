import useNavbar from "@/hooks/useNavbar";
import NavItem from "./NavItem";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

const MobileNav = () => {
  const { isOpen: navBarOpen, onToggle: toggleNavBar } = useNavbar();
  return (
    <div className="flex sm:hidden">
      <AnimatePresence>
        {navBarOpen && (
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 right-0 w-2/3 h-lvh backdrop-blur-xl flex flex-col py-32 pl-8 gap-8"
            >
              <NavItem path="/" itemIndex={"00"} itemName={"HOME"} />
              <NavItem
                path="/destinations"
                itemIndex={"01"}
                itemName={"DESTINATIONS"}
              />
              <NavItem path="/crew" itemIndex={"02"} itemName={"CREW"} />
              <NavItem
                path="/technology"
                itemIndex={"03"}
                itemName={"TECHNOLOGY"}
              />
            </m.div>
          </LazyMotion>
        )}
      </AnimatePresence>
      <img
        src={
          navBarOpen
            ? "images/shared/icon-close.svg"
            : "images/shared/icon-hamburger.svg"
        }
        alt={navBarOpen ? "Close Menu" : "Open Menu"}
        className={`w-5 h-5 cursor-pointer z-10`}
        onClick={toggleNavBar}
      />
    </div>
  );
};

export default MobileNav;
