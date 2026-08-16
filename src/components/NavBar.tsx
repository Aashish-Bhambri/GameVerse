import logo3 from "../assets/Logo3.svg";
import { Link } from "react-router-dom";
import { SearchInput } from "./SearchInput";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between gap-4 w-full py-2">
      <Link
        to="/"
        aria-label="GameVerse Home"
        className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg pr-2"
      >
        <img
          src={logo3}
          alt="GameVerse Logo"
          className="w-11 h-11 object-contain group-hover:scale-105 transition-transform duration-200"
        />
        <span className="hidden sm:inline-block font-black text-xl tracking-wider text-white group-hover:text-emerald-400 transition-colors uppercase">
          Game<span className="text-emerald-400">Verse</span>
        </span>
      </Link>
      <SearchInput />
    </header>
  );
};

export default NavBar;
