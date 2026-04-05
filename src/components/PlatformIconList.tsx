import type { Platform } from "../hooks/useGames";
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
    <div className="flex flex-wrap gap-2 items-center text-gray-400">
      {platforms?.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return IconComponent ? <IconComponent key={platform.id} className="w-5 h-5 transition-colors hover:text-white" /> : null;
      })}
    </div>
  );
};

export default PlatformIconList;
