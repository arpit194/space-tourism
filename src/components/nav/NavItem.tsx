import { NavLink } from "react-router-dom";
import { Typography } from "@/components/Typography";
import useNavbar from "@/hooks/useNavbar";

type NavItemProps = {
  path: string;
  itemIndex: string;
  itemName: string;
};

const NavItem = ({ path, itemIndex, itemName }: NavItemProps) => {
  const navbar = useNavbar();
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `text-white md:border-b-4 md:border-transparent md:hover:border-b-4 md:hover:border-r-0 hover:border-grey md:h-full flex items-center ${
          isActive
            ? "border-r-4 border-white hover:border-white md:border-white md:border-r-0 md:hover:border-white"
            : ""
        }`
      }
      onClick={navbar.onToggle}
    >
      <Typography variant={"preset8"}>
        <span className="font-bold">{itemIndex}</span>
        &nbsp;{itemName}
      </Typography>
    </NavLink>
  );
};

export default NavItem;
