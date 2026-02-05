import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContaioner from "./GameCardContaioner";
import type { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={3}>
        {isLoading &&
          skeletons.map((skeletons) => (
            <GameCardContaioner key={skeletons}>
              {" "}
              <GameCardSkeleton />
            </GameCardContaioner>
          ))}
        {data.map((game) => (
          <GameCardContaioner key={game.id}>
            <GameCard game={game} name={game.name} />
          </GameCardContaioner>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
