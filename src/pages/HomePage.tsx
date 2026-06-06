import GameGrid from "../components/GameGrid";
import Sidebar from "../components/Sidebar";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import useGameQueryStore from "../store";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

function HomePage() {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { data: genres = [] } = useGenres();
  const { data: platforms = [] } = usePlatforms();

  const selectedGenre = genres.find((g) => g.id === gameQuery.genreId);
  const selectedPlatform = platforms.find((p) => p.id === gameQuery.platformId);

  const heading = `${selectedPlatform?.name || ""} ${selectedGenre?.name || ""} Games`.trim();

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8 p-4 lg:p-8 max-w-[1600px] mx-auto w-full">
      {/* Aside / Sidebar Area */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      {/* Main Feed Area */}
      <main className="flex flex-col gap-6">
        {/* Main heading */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-2">
          {heading === "Games" || !heading ? "Games" : heading}
        </h1>
        
        {/* Selectors */}
        <div className="flex flex-wrap items-center gap-4">
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
