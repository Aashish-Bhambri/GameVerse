import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import type { Genre } from "./hooks/useGenres";
import type { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="min-h-screen bg-[#151515] text-gray-200 font-sans flex flex-col">
      {/* Navbar Area */}
      <header className="sticky top-0 z-50 bg-[#151515]/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </header>

      {/* Main Content Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 p-4 lg:p-8">
        
        {/* Aside / Sidebar Area */}
        <aside className="hidden lg:block">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </aside>

        {/* Main Feed Area */}
        <main className="flex flex-col gap-6">
          {/* Main heading based on selections */}
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            {gameQuery.platform?.name || ''} {gameQuery.genre?.name || ''} Games
          </h1>
          
          {/* Selectors */}
          <div className="flex flex-wrap items-center gap-4">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
            />
          </div>

          {/* Grid */}
          <GameGrid gameQuery={gameQuery} />
        </main>
      </div>
    </div>
  );
}

export default App;
