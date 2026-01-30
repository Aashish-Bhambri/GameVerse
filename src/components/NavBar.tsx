import { HStack, Image } from "@chakra-ui/react";
import react from "../assets/react.svg";
import ChangecolorMode from "./ChangecolorMode";

const NavBar = () => {
  return (
    <HStack>
      <Image src={react}></Image>
      <ChangecolorMode />
    </HStack>
  );
};

export default NavBar;
