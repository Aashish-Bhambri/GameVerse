import useGameQueryStore from "../store";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import { IoMdClose } from "react-icons/io";

const FilterTags = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const resetAll = useGameQueryStore((s) => s.resetAll);

  const { data: genres = [] } = useGenres();
  const { data: platforms = [] } = usePlatforms();

  const selectedGenre = genres.find((g) => g.id === gameQuery.genreId);
  const selectedPlatform = platforms.find((p) => p.id === gameQuery.platformId);

  const hasFilters = gameQuery.genreId || gameQuery.platformId || gameQuery.searchText;

  if (!hasFilters) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mt-1">
      {selectedPlatform && (
        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-md border border-white/10 transition-colors">
          Platform: {selectedPlatform.name}
          <button
            onClick={() => setPlatformId(undefined)}
            className="hover:bg-white/20 p-0.5 rounded-md transition-colors"
            aria-label="Remove platform filter"
          >
            <IoMdClose className="w-3.5 h-3.5" />
          </button>
        </span>
      )}

      {selectedGenre && (
        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-md border border-white/10 transition-colors">
          Genre: {selectedGenre.name}
          <button
            onClick={() => setGenreId(undefined)}
            className="hover:bg-white/20 p-0.5 rounded-md transition-colors"
            aria-label="Remove genre filter"
          >
            <IoMdClose className="w-3.5 h-3.5" />
          </button>
        </span>
      )}

      {gameQuery.searchText && (
        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-md border border-white/10 transition-colors">
          Search: "{gameQuery.searchText}"
          <button
            onClick={() => setSearchText(undefined)}
            className="hover:bg-white/20 p-0.5 rounded-md transition-colors"
            aria-label="Remove search filter"
          >
            <IoMdClose className="w-3.5 h-3.5" />
          </button>
        </span>
      )}

      <button
        onClick={resetAll}
        className="px-3 py-1.5 text-xs text-gray-400 hover:text-white font-medium hover:underline transition-colors"
      >
        Clear all
      </button>
    </div>
  );
};

export default FilterTags;
