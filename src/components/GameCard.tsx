import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CreditScore from "./CreditScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
  name: string;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="w-full bg-[#202020] rounded-xl overflow-hidden hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer flex flex-col group">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />
      </div>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
          {game.name}
        </h2>
        <div className="flex justify-between items-center mt-auto">
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CreditScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
