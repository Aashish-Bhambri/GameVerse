import useData from "@/hooks/useData";
import { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data = [] } = useData<Genre>("/genres");
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
              <Text>{genre.name}</Text>
            </HStack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
