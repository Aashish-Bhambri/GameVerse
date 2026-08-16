import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import FilterTags from "./FilterTags";
import useGameQueryStore from "../store";
import { BiSearchAlt } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames();

  const resetAll = useGameQueryStore((s) => s.resetAll);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Active filters display */}
      <FilterTags />

      {/* Error state */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 flex items-center justify-between">
          <p className="text-sm font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-semibold rounded-lg transition-colors"
          >
            <FiRefreshCw className="w-3.5 h-3.5" />
            Retry
          </button>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !error && data.length === 0 && (
        <div className="py-16 px-6 bg-[#181818] border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
            <BiSearchAlt className="w-8 h-8 text-gray-400" />
          </div>
          <div className="flex flex-col gap-1 max-w-md">
            <h3 className="text-lg font-bold text-white">No games found</h3>
            <p className="text-sm text-gray-400">
              We couldn't find any games matching your current search or active filters.
            </p>
          </div>
          <button
            onClick={resetAll}
            className="mt-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-emerald-900/30 transition-all active:scale-95"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {/* Page 1 Loader */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <div key={skeleton} className="flex justify-center w-full">
              <GameCardSkeleton />
            </div>
          ))}

        {/* Existing Games */}
        {data.map((game) => (
          <div key={game.id} className="flex justify-center w-full">
            <GameCard game={game} />
          </div>
        ))}

        {/* Next Page Skeletons */}
        {isFetchingNextPage &&
          [1, 2, 3, 4].map((skeleton) => (
            <div key={skeleton} className="flex justify-center w-full">
              <GameCardSkeleton />
            </div>
          ))}
      </div>

      {/* Pagination "Load More" Button */}
      {hasNextPage && !isLoading && data.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={fetchNextPage}
            disabled={isFetchingNextPage}
            className="px-8 py-3 bg-[#202020] hover:bg-[#2a2a2a] disabled:bg-[#1a1a1a] text-white disabled:text-gray-500 font-semibold text-sm rounded-lg border border-white/5 hover:border-white/10 transition-all shadow-md active:scale-95 disabled:pointer-events-none"
          >
            {isFetchingNextPage ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Loading...
              </span>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default GameGrid;
