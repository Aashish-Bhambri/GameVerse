import { HStack, Image } from "@chakra-ui/react";
import react from "../assets/react.svg";
import ChangecolorMode from "./ChangecolorMode";
import { SearchInput } from "./SearchInput";

const NavBar = () => {
  return (
    <HStack>
      <Image src={react}></Image>
      <SearchInput />
      <ChangecolorMode />
    </HStack>
  );
};

export default NavBar;
