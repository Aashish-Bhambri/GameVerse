import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CreditScore from "./CreditScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const formattedDate = game.released
    ? new Date(game.released).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "N/A";

  const genresList = game.genres?.map((g) => g.name).join(", ") || "N/A";

  return (
    <div className="w-full bg-[#202020] rounded-xl overflow-hidden hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer flex flex-col group border border-white/5 hover:border-white/15">
      <Link to={`/games/${game.slug}`} className="w-full h-48 overflow-hidden block">
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </Link>
      <div className="p-5 flex flex-col flex-1 gap-4">
        {/* Platforms & Metacritic Score row */}
        <div className="flex justify-between items-center">
          <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform) || []} />
          {game.metacritic !== undefined && game.metacritic !== null && (
            <CreditScore score={game.metacritic} />
          )}
        </div>

        {/* Title */}
        <Link to={`/games/${game.slug}`} className="block">
          <h2 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors line-clamp-2 leading-tight">
            {game.name}
          </h2>
        </Link>

        {/* Details breakdown (similar to RAWG card details) */}
        <div className="border-t border-white/5 pt-3 mt-auto flex flex-col gap-1.5 text-xs text-gray-400">
          <div className="flex justify-between items-center">
            <span>Release date:</span>
            <span className="text-gray-300 font-medium">{formattedDate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Genres:</span>
            <span className="text-gray-300 font-medium truncate max-w-[150px]" title={genresList}>
              {genresList}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
