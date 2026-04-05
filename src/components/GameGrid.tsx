import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading &&
          skeletons.map((skeleton) => (
            <div key={skeleton} className="flex justify-center">
              <GameCardSkeleton />
            </div>
          ))}
        {!isLoading && data.map((game) => (
          <div key={game.id} className="flex justify-center">
            <GameCard game={game} name={game.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
