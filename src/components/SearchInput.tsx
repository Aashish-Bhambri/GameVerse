import { useState, useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const storeSearchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const [value, setValue] = useState(storeSearchText || "");
  const navigate = useNavigate();

  // Keep input in sync if store search text is cleared externally
  useEffect(() => {
    setValue(storeSearchText || "");
  }, [storeSearchText]);

  // Global hotkey listener (Cmd+K / Ctrl+K and '/')
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in another input or textarea
      if (
        (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) &&
        e.target !== inputRef.current
      ) {
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      } else if (e.key === "/" && e.target !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "Escape" && document.activeElement === inputRef.current) {
        inputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    setSearchText(trimmed || undefined);
    navigate("/");
  };

  const handleClear = () => {
    setValue("");
    setSearchText(undefined);
    inputRef.current?.focus();
  };

  return (
    <form
      role="search"
      className="flex-1 max-w-3xl"
      onSubmit={handleSubmit}
    >
      <div className="relative group flex items-center">
        <label htmlFor="global-search-input" className="sr-only">
          Search games
        </label>
        <div className="absolute left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-emerald-400 transition-colors">
          <BsSearch className="w-4 h-4" />
        </div>
        <input
          id="global-search-input"
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search games... (Press '/' or 'Ctrl+K' to focus)"
          aria-label="Search games"
          className="w-full bg-[#202020] hover:bg-[#262626] focus:bg-[#252525] text-gray-100 placeholder-gray-400 text-sm rounded-full block pl-10 pr-20 py-2.5 transition-all outline-none border border-white/5 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
        />
        
        <div className="absolute right-3 flex items-center gap-1.5">
          {value && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search query"
              className="p-1 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <IoMdClose className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center text-xs font-semibold text-gray-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded shadow-sm">
            ⌘K
          </kbd>
        </div>
      </div>
    </form>
  );
};
