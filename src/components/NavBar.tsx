import logo3 from "../assets/Logo3.svg";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <img src={logo3} alt="Logo" className="w-14 h-14 object-contain hover:scale-110 transition-transform cursor-pointer" />
      <SearchInput onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
