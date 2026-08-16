import GameGrid from "../components/GameGrid";
import Sidebar from "../components/Sidebar";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import useGameQueryStore from "../store";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

function HomePage() {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data: genres = [] } = useGenres();
  const { data: platforms = [] } = usePlatforms();

  const selectedGenre = genres.find((g) => g.id === gameQuery.genreId);
  const selectedPlatform = platforms.find((p) => p.id === gameQuery.platformId);

  const filterLabels = [selectedPlatform?.name, selectedGenre?.name].filter(Boolean);
  const heading =
    gameQuery.title ||
    (gameQuery.searchText
      ? `Results for "${gameQuery.searchText}"`
      : filterLabels.length > 0
      ? `${filterLabels.join(" ")} Games`
      : "All Games");

  // Top popular genres for mobile quick-filter chips
  const popularGenres = genres.slice(0, 8);

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8 p-4 lg:p-8 max-w-[1600px] mx-auto w-full">
      {/* Aside / Sidebar Area for Desktop */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      {/* Main Feed Area */}
      <main className="flex flex-col gap-6 min-w-0">
        {/* Main heading and meta */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {heading}
          </h1>
          <p className="text-sm text-gray-400">
            Discover and explore titles across top gaming platforms and genres.
          </p>
        </div>

        {/* Mobile Quick Genre Chips */}
        {popularGenres.length > 0 && (
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4">
            <button
              type="button"
              onClick={() => setGenreId(undefined)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                !gameQuery.genreId
                  ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                  : "bg-[#202020] text-gray-300 hover:bg-[#282828] border border-white/5"
              }`}
            >
              All Genres
            </button>
            {popularGenres.map((genre) => (
              <button
                key={genre.id}
                type="button"
                onClick={() => setGenreId(genre.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  gameQuery.genreId === genre.id
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                    : "bg-[#202020] text-gray-300 hover:bg-[#282828] border border-white/5"
                }`}
              >
                {genre.name}
              </button>
            ))}
          </div>
        )}

        {/* Selectors Toolbar */}
        <div className="flex flex-wrap items-center gap-3">
          <PlatformSelector />
          <SortSelector />
        </div>

        {/* Grid */}
        <GameGrid />
      </main>
    </div>
  );
}

export default HomePage;
