import { HStack, Image } from "@chakra-ui/react";
import react from "../assets/react.svg";
import ChangecolorMode from "./ChangecolorMode";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={react}></Image>
      <SearchInput onSearch={onSearch} />
      <ChangecolorMode />
    </HStack>
  );
};

export default NavBar;
