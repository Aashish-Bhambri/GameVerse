import useData from "../hooks/useData";
import { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data = [], isLoading, error } = useData<Genre>("/genres");
  
  if (isLoading) return (
    <div className="flex justify-center py-10">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  );
  if (error) return null;

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold mb-3">Genres</h2>
      <ul className="flex flex-col gap-2">
        {data.map((genre) => (
          <li key={genre.id}>
            <button
              onClick={() => onSelectGenre(genre)}
              className={`flex items-center gap-3 w-full text-left p-2 rounded-lg transition-all hover:bg-white/10 group ${
                genre.id === selectedGenre?.id ? "bg-white/10 font-bold" : "font-normal text-gray-400"
              }`}
            >
              <img
                className="w-8 h-8 rounded-lg object-cover group-hover:scale-110 transition-transform"
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <span className="text-lg group-hover:text-white transition-colors">{genre.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
