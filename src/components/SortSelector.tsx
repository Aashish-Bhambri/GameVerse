interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "-name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  
  return (
    <div className="relative inline-block w-48">
      <select
        className="block w-full appearance-none bg-[#202020] hover:bg-[#2a2a2a] text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors cursor-pointer"
        value={sortOrder}
        onChange={(e) => onSelectSortOrder(e.target.value)}
      >
        <option value="" disabled hidden>
          Order By: Relevance
        </option>
        {sortOrders.map((order) => (
          <option key={order.value} value={order.value}>
            Order By: {order.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  );
};

export default SortSelector;
