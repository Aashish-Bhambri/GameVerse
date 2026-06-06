import { useState, useRef, useEffect } from "react";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data = [], error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedPlatform = data.find((p) => p.id === selectedPlatformId);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (error) return null;

  return (
    <div className="relative inline-block w-52 text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full bg-[#202020] hover:bg-[#2a2a2a] text-white py-2.5 px-4 rounded-md focus:outline-none transition-all border border-white/5 active:scale-[0.98] shadow-md text-sm font-semibold"
      >
        <span>{selectedPlatform?.name || "Platforms"}</span>
        <BsChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-[#202020]/95 backdrop-blur-md border border-white/10 rounded-md shadow-xl z-50 max-h-72 overflow-y-auto overflow-x-hidden scrollbar-thin">
          <ul className="py-1">
            <li>
              <button
                onClick={() => {
                  setSelectedPlatformId(undefined);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/10 ${
                  !selectedPlatformId ? "bg-white/5 font-bold text-white" : "text-gray-300"
                }`}
              >
                All Platforms
              </button>
            </li>
            {data.map((platform) => (
              <li key={platform.id}>
                <button
                  onClick={() => {
                    setSelectedPlatformId(platform.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/10 ${
                    platform.id === selectedPlatformId ? "bg-white/5 font-bold text-white" : "text-gray-300"
                  }`}
                >
                  {platform.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
