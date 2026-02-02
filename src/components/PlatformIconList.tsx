import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    web: BsGlobe,
    android: FaAndroid,
    nintendo: SiNintendo,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.600"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
