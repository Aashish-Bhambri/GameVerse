const GameCardSkeleton = () => {
  return (
    <div className="w-full bg-[#202020] rounded-xl overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-700/50"></div>
      <div className="p-5 flex flex-col gap-4">
        <div className="h-6 bg-gray-700/50 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700/50 rounded w-1/2 mt-2"></div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-5 bg-gray-700/50 rounded w-1/3"></div>
          <div className="h-6 bg-gray-700/50 rounded w-10"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
