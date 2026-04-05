import type { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  
  if (error) return null;

  return (
    <div className="relative inline-block w-48">
      <select
        className="block w-full appearance-none bg-[#202020] hover:bg-[#2a2a2a] text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors cursor-pointer"
        value={selectedPlatform?.id.toString() || ""}
        onChange={(e) => {
          const platform = data.find(p => p.id.toString() === e.target.value);
          if (platform) onSelectPlatform(platform);
        }}
      >
        <option value="" disabled hidden>
          Platforms
        </option>
        {data.map((platform) => (
          <option key={platform.id} value={platform.id.toString()}>
            {platform.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  );
};

export default PlatformSelector;
