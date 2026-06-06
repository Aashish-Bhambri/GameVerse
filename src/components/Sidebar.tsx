import { useState } from "react";
import useGameQueryStore from "../store";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import getCroppedImageUrl from "../services/image-url";
import {
  FaHome,
  FaStar,
  FaCalendarAlt,
  FaCalendarMinus,
  FaCalendarPlus,
  FaCalendar,
  FaTrophy,
  FaFire,
  FaCrown,
  FaGamepad,
  FaShoppingBag,
  FaFolder,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const Sidebar = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const resetAll = useGameQueryStore((s) => s.resetAll);

  const { data: genres = [], isLoading: loadingGenres } = useGenres();
  const { data: platforms = [], isLoading: loadingPlatforms } = usePlatforms();

  const [expandGenres, setExpandGenres] = useState(false);
  const [expandPlatforms, setExpandPlatforms] = useState(false);

  // Limits
  const visibleGenres = expandGenres ? genres : genres.slice(0, 5);
  const visiblePlatforms = expandPlatforms ? platforms : platforms.slice(0, 3);

  const handleHomeClick = () => {
    resetAll();
  };

  const handleReviewsClick = () => {
    resetAll();
    setSortOrder("-rating");
  };

  const handleNewReleasesClick = () => {
    resetAll();
    setSortOrder("-released");
  };

  const handleTopClick = (type: string) => {
    resetAll();
    if (type === "best-year") {
      setSortOrder("-metacritic");
    } else if (type === "popular-2025") {
      setSortOrder("-added");
    } else if (type === "top-250") {
      setSortOrder("-metacritic");
    }
  };

  return (
    <div className="flex flex-col gap-6 text-gray-300 pr-2 select-none pb-12">
      {/* Home & Reviews Section */}
      <div>
        <ul className="flex flex-col gap-1">
          <li>
            <button
              onClick={handleHomeClick}
              className={`flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg transition-all hover:bg-white/10 group ${
                !gameQuery.genreId && !gameQuery.platformId && !gameQuery.sortOrder && !gameQuery.searchText
                  ? "bg-white/10 font-bold text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FaHome className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-base group-hover:text-white transition-colors">Home</span>
            </button>
          </li>
          <li>
            <button
              onClick={handleReviewsClick}
              className={`flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg transition-all hover:bg-white/10 group ${
                gameQuery.sortOrder === "-rating" ? "bg-white/10 font-bold text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <FaStar className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-base group-hover:text-white transition-colors">Reviews</span>
            </button>
          </li>
        </ul>
      </div>

      {/* New Releases Section */}
      <div>
        <h3 className="text-lg font-extrabold text-white mb-2 px-3 tracking-wide">New Releases</h3>
        <ul className="flex flex-col gap-1">
          {[
            { label: "Last 30 days", icon: FaCalendarAlt },
            { label: "This week", icon: FaCalendarMinus },
            { label: "Next week", icon: FaCalendarPlus },
            { label: "Release calendar", icon: FaCalendar },
          ].map((item) => (
            <li key={item.label}>
              <button
                onClick={handleNewReleasesClick}
                className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg transition-all hover:bg-white/10 group text-gray-400 hover:text-white"
              >
                <item.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm group-hover:text-white transition-colors">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Section */}
      <div>
        <h3 className="text-lg font-extrabold text-white mb-2 px-3 tracking-wide">Top</h3>
        <ul className="flex flex-col gap-1">
          <li>
            <button
              onClick={() => handleTopClick("best-year")}
              className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg transition-all hover:bg-white/10 group text-gray-400 hover:text-white"
            >
              <FaTrophy className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-sm group-hover:text-white transition-colors">Best of the year</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTopClick("popular-2025")}
              className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg transition-all hover:bg-white/10 group text-gray-400 hover:text-white"
            >
              <FaFire className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-sm group-hover:text-white transition-colors">Popular in 2025</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTopClick("top-250")}
              className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg transition-all hover:bg-white/10 group text-gray-400 hover:text-white"
            >
              <FaCrown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-sm group-hover:text-white transition-colors">All time top 250</span>
            </button>
          </li>
        </ul>
      </div>

      {/* All Games Link */}
      <div>
        <button
          onClick={handleHomeClick}
          className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg transition-all hover:bg-white/10 group text-gray-400 hover:text-white"
        >
          <FaGamepad className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-base font-bold text-white group-hover:text-white transition-colors">All Games</span>
        </button>
      </div>

      {/* Browse Section */}
      <div>
        <h3 className="text-lg font-extrabold text-white mb-2 px-3 tracking-wide">Browse</h3>
        <ul className="flex flex-col gap-1">
          {[
            { label: "Platforms", icon: BsGlobe },
            { label: "Stores", icon: FaShoppingBag },
            { label: "Collections", icon: FaFolder },
          ].map((item) => (
            <li key={item.label}>
              <button className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg transition-all hover:bg-white/10 group text-gray-400 hover:text-white">
                <item.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm group-hover:text-white transition-colors">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Platforms Section */}
      <div>
        <h3 className="text-lg font-extrabold text-white mb-2 px-3 tracking-wide">Platforms</h3>
        {loadingPlatforms ? (
          <div className="px-3 py-2 text-xs text-gray-500 animate-pulse">Loading platforms...</div>
        ) : (
          <ul className="flex flex-col gap-1">
            {visiblePlatforms.map((platform) => (
              <li key={platform.id}>
                <button
                  onClick={() => setPlatformId(platform.id)}
                  className={`flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg transition-all hover:bg-white/10 group ${
                    platform.id === gameQuery.platformId
                      ? "bg-white/10 font-bold text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-sm group-hover:text-white transition-colors">{platform.name}</span>
                </button>
              </li>
            ))}
            {platforms.length > 3 && (
              <li>
                <button
                  onClick={() => setExpandPlatforms(!expandPlatforms)}
                  className="flex items-center justify-between w-full py-2 px-3 text-xs text-gray-500 hover:text-white transition-colors font-bold uppercase tracking-wider"
                >
                  <span>{expandPlatforms ? "Show Less" : "Show All"}</span>
                  {expandPlatforms ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </li>
            )}
          </ul>
        )}
      </div>

      {/* Genres Section */}
      <div>
        <h3 className="text-lg font-extrabold text-white mb-2 px-3 tracking-wide">Genres</h3>
        {loadingGenres ? (
          <div className="px-3 py-2 text-xs text-gray-500 animate-pulse">Loading genres...</div>
        ) : (
          <ul className="flex flex-col gap-1">
            {visibleGenres.map((genre) => (
              <li key={genre.id}>
                <button
                  onClick={() => setGenreId(genre.id)}
                  className={`flex items-center gap-3 w-full text-left py-1.5 px-3 rounded-lg transition-all hover:bg-white/10 group ${
                    genre.id === gameQuery.genreId
                      ? "bg-white/10 font-bold text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <img
                    className="w-8 h-8 rounded-lg object-cover group-hover:scale-110 transition-transform"
                    src={getCroppedImageUrl(genre.image_background)}
                    alt={genre.name}
                  />
                  <span className="text-sm group-hover:text-white transition-colors">{genre.name}</span>
                </button>
              </li>
            ))}
            {genres.length > 5 && (
              <li>
                <button
                  onClick={() => setExpandGenres(!expandGenres)}
                  className="flex items-center justify-between w-full py-2 px-3 text-xs text-gray-500 hover:text-white transition-colors font-bold uppercase tracking-wider"
                >
                  <span>{expandGenres ? "Show Less" : "Show All"}</span>
                  {expandGenres ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
