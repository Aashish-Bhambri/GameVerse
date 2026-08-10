import useData from "./useData";
import { mockPlatforms } from "../data/mock-platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const { data, error, isLoading } = useData<Platform>("/platforms/lists/parents");
  const hasError = !!error;

  return {
    data: hasError || data.length === 0 ? mockPlatforms : data,
    isLoading,
    error: hasError ? "" : error,
  };
};

export default usePlatforms;
