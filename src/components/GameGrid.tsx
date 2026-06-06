import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import FilterTags from "./FilterTags";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Active filters display */}
      <FilterTags />

      {error && <p className="text-red-500 font-semibold">{error}</p>}

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
      {hasNextPage && !isLoading && (
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
