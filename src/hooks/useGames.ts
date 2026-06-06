import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGameQueryStore from "../store";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: { id: number; name: string }[];
  released: string;
}

interface FetchGamesResponse {
  count: number;
  next: string | null;
  results: Game[];
}

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const [data, setData] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isFetchingNextPage, setFetchingNextPage] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  // Reset and fetch from page 1 when query changes
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    setPage(1);

    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controller.signal,
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: 1,
          page_size: 16,
        },
      })
      .then((res) => {
        setData(res.data.results);
        setHasNextPage(!!res.data.next);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [gameQuery]);

  // Load more games when page increases
  useEffect(() => {
    if (page === 1) return;

    const controller = new AbortController();
    setFetchingNextPage(true);

    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controller.signal,
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: page,
          page_size: 16,
        },
      })
      .then((res) => {
        setData((prev) => [...prev, ...res.data.results]);
        setHasNextPage(!!res.data.next);
        setFetchingNextPage(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setFetchingNextPage(false);
      });

    return () => controller.abort();
  }, [page, gameQuery]);

  const fetchNextPage = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      setPage((prev) => prev + 1);
    }
  };

  return {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
};

export default useGames;