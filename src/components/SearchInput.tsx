import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const navigate = useNavigate();
  
  return (
    <form
      className="flex-1 max-w-3xl"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate('/');
        }
      }}
    >
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-white transition-colors">
          <BsSearch />
        </div>
        <input
          ref={ref}
          type="text"
          placeholder="Search games..."
          className="w-full bg-[#202020] hover:bg-[#2a2a2a] focus:bg-white focus:text-black text-gray-200 text-sm rounded-full block pl-10 p-2.5 transition-all outline-none"
        />
      </div>
    </form>
  );
};
