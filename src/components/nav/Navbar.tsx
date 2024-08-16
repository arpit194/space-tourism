import MobileNav from "./MobileNav";
import BigNavBar from "./BigNavBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 p-6 sm:pl-16 w-full flex justify-between items-center lg:top-10 lg:z-10">
      <Link to={"/"}>
        <img
          src="images/shared/logo.svg"
          alt="Space Tourism Logo"
          className="w-10 h-10"
        />
      </Link>
      <MobileNav />
      <BigNavBar />
    </nav>
  );
};

export default Navbar;
