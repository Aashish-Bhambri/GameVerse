import useData from "@/hooks/useData";
import { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data = [], isLoading, error } = useData<Genre>("/genres");
  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Box as="ul" style={{ listStyle: "none", margin: 0, padding: "0px" }}>
        {data.map((genre) => (
          <Box as="li" key={genre.id} mb={2} padding="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant={"outline"}
              >
                {genre.name}
              </Button>
            </HStack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
