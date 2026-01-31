import type { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CreditScore from "./CreditScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
  name: string;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          borderRadius={10}
        />
        <CardBody>
          <Heading>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CreditScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card.Root>
    </>
  );
};

export default GameCard;
