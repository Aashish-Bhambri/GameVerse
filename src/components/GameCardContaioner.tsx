import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContaioner = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow={"hidden"} width="300px" padding="2px">
      {children}
    </Box>
  );
};

export default GameCardContaioner;
