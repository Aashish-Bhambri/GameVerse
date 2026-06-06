const GameCardSkeleton = () => {
  return (
    <div className="w-full bg-[#202020] rounded-xl overflow-hidden animate-pulse border border-white/5 flex flex-col">
      <div className="w-full h-48 bg-white/5"></div>
      <div className="p-5 flex flex-col flex-1 gap-4">
        {/* Platforms and score */}
        <div className="flex justify-between items-center">
          <div className="h-4 bg-white/5 rounded w-1/3"></div>
          <div className="h-5 bg-white/5 rounded w-8"></div>
        </div>

        {/* Title */}
        <div className="h-6 bg-white/5 rounded w-3/4"></div>

        {/* Details breakdown */}
        <div className="border-t border-white/5 pt-3 mt-auto flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="h-3 bg-white/5 rounded w-1/4"></div>
            <div className="h-3 bg-white/5 rounded w-1/3"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-3 bg-white/5 rounded w-1/5"></div>
            <div className="h-3 bg-white/5 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
