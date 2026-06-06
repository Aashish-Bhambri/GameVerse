import logo3 from "../assets/Logo3.svg";
import { Link } from "react-router-dom";
import { SearchInput } from "./SearchInput";

const NavBar = () => {
  return (
    <div className="flex items-center gap-4 w-full">
      <Link to="/">
        <img src={logo3} alt="Logo" className="w-14 h-14 object-contain hover:scale-110 transition-transform cursor-pointer" />
      </Link>
      <SearchInput />
    </div>
  );
};

export default NavBar;
