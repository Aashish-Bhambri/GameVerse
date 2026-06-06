import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useGame from "@/hooks/useGame";
import useScreenshots from "@/hooks/useScreenshots";
import useTrailers from "@/hooks/useTrailers";
import PlatformIconList from "@/components/PlatformIconList";
import CreditScore from "@/components/CreditScore";
import getCroppedImageUrl from "@/services/image-url";
import { IoMdClose } from "react-icons/io";
import { BsGlobe, BsReddit } from "react-icons/bs";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { game, isLoading, error } = useGame(slug!);
  const { screenshots } = useScreenshots(slug!);
  const { trailers } = useTrailers(slug!);

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="flex-1 flex justify-center items-center py-20 min-h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error || !game) {
    return (
      <div className="flex-1 flex justify-center items-center py-20 text-red-500 font-semibold min-h-[500px]">
        {error || "Game not found"}
      </div>
    );
  }

  // Handle rating color maps
  const ratingColors: { [key: string]: { bg: string; text: string; label: string; emoji: string } } = {
    exceptional: { bg: "bg-green-500", text: "text-green-400", label: "Exceptional", emoji: "🎯" },
    recommended: { bg: "bg-blue-500", text: "text-blue-400", label: "Recommended", emoji: "👍" },
    meh: { bg: "bg-yellow-500", text: "text-yellow-400", label: "Meh", emoji: "😐" },
    skip: { bg: "bg-red-500", text: "text-red-400", label: "Skip", emoji: "🛑" },
  };

  const hasRatings = game.ratings && game.ratings.length > 0;
  // Sort ratings so Exceptional is first, then Recommended, Meh, Skip
  const sortedRatings = [...(game.ratings || [])].sort((a, b) => {
    const order = ["exceptional", "recommended", "meh", "skip"];
    return order.indexOf(a.title) - order.indexOf(b.title);
  });

  const formattedDate = game.released
    ? new Date(game.released).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "N/A";

  const trailer = trailers?.[0];

  return (
    <div className="flex-1 flex flex-col relative w-full text-gray-200">
      {/* Background Banner Backdrop */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden z-0">
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt="background"
          className="w-full h-full object-cover opacity-20 blur-sm scale-105"
        />
        {/* Gradients to fade out the background image */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151515]/70 to-[#151515]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] via-transparent to-[#151515]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 lg:px-8 py-6 flex flex-col gap-8">
        {/* Breadcrumbs */}
        <nav className="text-xs text-gray-400 flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <Link to="/" className="hover:text-white transition-colors">GAMES</Link>
          <span>/</span>
          <span className="text-gray-300 font-medium truncate max-w-[200px]">{game.name.toUpperCase()}</span>
        </nav>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12">
          
          {/* Left Column: Details */}
          <div className="flex flex-col gap-6">
            
            {/* Platforms row & release date */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-widest text-gray-400">
              <span className="bg-white/10 px-2.5 py-1 rounded text-white">{formattedDate}</span>
              <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform) || []} />
              {game.playtime > 0 && <span>{game.playtime} HRS PLAYTIME</span>}
            </div>

            {/* Game Title */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
              {game.name}
            </h1>

            {/* Ratings distribution bar */}
            {hasRatings && (
              <div className="flex flex-col gap-3 mt-2">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Ratings Breakdown</h3>
                {/* Visual Bar */}
                <div className="w-full h-9 bg-white/5 rounded-lg overflow-hidden flex shadow-inner">
                  {sortedRatings.map((rating) => {
                    const ratingStyle = ratingColors[rating.title] || { bg: "bg-gray-500", text: "text-gray-400" };
                    return (
                      <div
                        key={rating.id}
                        className={`${ratingStyle.bg} hover:brightness-110 transition-all cursor-pointer`}
                        style={{ width: `${rating.percent}%` }}
                        title={`${ratingStyle.label}: ${rating.count} votes (${rating.percent}%)`}
                      />
                    );
                  })}
                </div>
                {/* Legends */}
                <div className="flex flex-wrap gap-4 mt-1">
                  {sortedRatings.map((rating) => {
                    const ratingStyle = ratingColors[rating.title] || {
                      text: "text-gray-400",
                      label: rating.title,
                      emoji: "❓"
                    };
                    return (
                      <div key={rating.id} className="flex items-center gap-2">
                        <span className="text-sm">{ratingStyle.emoji}</span>
                        <span className={`text-xs font-bold ${ratingStyle.text}`}>{ratingStyle.label}</span>
                        <span className="text-xs text-gray-400 font-medium">{rating.count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Expandable Description */}
            <div className="flex flex-col gap-3 mt-4">
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">About</h3>
              <div className="text-gray-300 leading-relaxed text-base whitespace-pre-wrap">
                {isExpanded || !game.description_raw
                  ? game.description_raw
                  : `${game.description_raw.slice(0, 450)}...`}
              </div>
              {game.description_raw && game.description_raw.length > 450 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="self-start text-xs font-bold bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded text-white transition-colors uppercase tracking-wider mt-1"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-6 mt-6 border-t border-white/10 pt-6">
              <div>
                <span className="text-xs font-bold text-gray-400 tracking-wider block mb-1 uppercase">Platforms</span>
                <p className="text-sm font-medium text-white flex flex-wrap gap-1.5">
                  {game.platforms?.map((p) => p.platform.name).join(", ") || "N/A"}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 tracking-wider block mb-1 uppercase">Metascore</span>
                <div>
                  {game.metacritic ? <CreditScore score={game.metacritic} /> : <span className="text-sm font-medium text-white">N/A</span>}
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 tracking-wider block mb-1 uppercase">Genre</span>
                <p className="text-sm font-medium text-white">
                  {game.genres?.map((g) => g.name).join(", ") || "N/A"}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 tracking-wider block mb-1 uppercase">Release Date</span>
                <p className="text-sm font-medium text-white">{formattedDate}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 tracking-wider block mb-1 uppercase">Developer</span>
                <p className="text-sm font-medium text-white">
                  {game.developers?.map((d) => d.name).join(", ") || "N/A"}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 tracking-wider block mb-1 uppercase">Publisher</span>
                <p className="text-sm font-medium text-white">
                  {game.publishers?.map((p) => p.name).join(", ") || "N/A"}
                </p>
              </div>
            </div>

            {/* External Links */}
            {(game.website || game.reddit_url) && (
              <div className="flex flex-wrap gap-4 mt-4 border-t border-white/10 pt-6">
                {game.website && (
                  <a
                    href={game.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold rounded transition-colors"
                  >
                    <BsGlobe className="w-4 h-4" />
                    Official Website
                  </a>
                )}
                {game.reddit_url && (
                  <a
                    href={game.reddit_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-sm font-semibold rounded border border-red-500/20 transition-colors"
                  >
                    <BsReddit className="w-4 h-4" />
                    Reddit Community
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Media (Screenshots & Trailer) */}
          <div className="flex flex-col gap-6">
            
            {/* Game Trailer */}
            {trailer && (
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Game Trailer</h3>
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10 bg-[#202020]">
                  <video
                    src={trailer.data.max || trailer.data[480]}
                    poster={trailer.preview}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Screenshots Gallery */}
            {screenshots && screenshots.length > 0 && (
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Screenshots</h3>
                <div className="grid grid-cols-2 gap-3">
                  {screenshots.slice(0, 6).map((shot) => (
                    <div
                      key={shot.id}
                      onClick={() => setSelectedScreenshot(shot.image)}
                      className="aspect-video rounded-lg overflow-hidden border border-white/5 cursor-pointer hover:border-white/20 transition-all hover:scale-[1.02] shadow"
                    >
                      <img
                        src={getCroppedImageUrl(shot.image)}
                        alt="Screenshot thumbnail"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Screenshot Lightbox */}
      {selectedScreenshot && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex justify-center items-center p-4 md:p-8">
          <button
            onClick={() => setSelectedScreenshot(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-[101]"
            aria-label="Close image preview"
          >
            <IoMdClose className="w-6 h-6" />
          </button>
          <div
            className="w-full h-full max-w-5xl max-h-[85vh] flex justify-center items-center"
            onClick={() => setSelectedScreenshot(null)}
          >
            <img
              src={selectedScreenshot}
              alt="Screenshot full size"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetailPage;
