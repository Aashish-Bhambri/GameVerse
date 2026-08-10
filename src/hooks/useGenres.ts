
import useData from "./useData";
import { mockGenres } from "../data/mock-genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const { data, error, isLoading } = useData<Genre>("/genres");
  const hasError = !!error;

  return {
    data: hasError || !data || data.length === 0 ? mockGenres : data,
    isLoading,
    error: hasError ? "" : error,
  };
};

export default useGenres;