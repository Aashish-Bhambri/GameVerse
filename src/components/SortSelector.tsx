import { useState, useRef, useEffect } from "react";
import useGameQueryStore from "../store";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentSortOrder = sortOrders.find((o) => o.value === sortOrder);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block w-52 text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full bg-[#202020] hover:bg-[#2a2a2a] text-white py-2.5 px-4 rounded-md focus:outline-none transition-all border border-white/5 active:scale-[0.98] shadow-md text-sm font-semibold"
      >
        <span>Order by: {currentSortOrder?.label || "Relevance"}</span>
        <BsChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-[#202020]/95 backdrop-blur-md border border-white/10 rounded-md shadow-xl z-50">
          <ul className="py-1">
            {sortOrders.map((order) => (
              <li key={order.value}>
                <button
                  onClick={() => {
                    setSortOrder(order.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/10 ${
                    order.value === (sortOrder || "") ? "bg-white/5 font-bold text-white" : "text-gray-300"
                  }`}
                >
                  {order.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortSelector;
