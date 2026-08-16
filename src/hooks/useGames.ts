import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGameQueryStore, { type GameQuery } from "../store";
import { mockGames } from "../data/mock-games";

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

const getFilteredMockGames = (query: GameQuery) => {
  let filtered = [...mockGames];

  if (query.genreId) {
    filtered = filtered.filter((g) => g.genres?.some((genre) => genre.id === query.genreId));
  }

  if (query.platformId) {
    filtered = filtered.filter((g) => g.parent_platforms?.some((p) => p.platform.id === query.platformId));
  }

  if (query.searchText) {
    const search = query.searchText.toLowerCase();
    filtered = filtered.filter((g) => g.name.toLowerCase().includes(search));
  }

  if (query.sortOrder) {
    const order = query.sortOrder;
    if (order === "-metacritic" || order === "-rating") {
      filtered.sort((a, b) => b.metacritic - a.metacritic);
    } else if (order === "-released") {
      filtered.sort((a, b) => new Date(b.released).getTime() - new Date(a.released).getTime());
    } else if (order === "-name") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (order === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  return filtered;
};

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
        setData(res.data.results || []);
        setHasNextPage(!!res.data.next);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        
        console.warn("Games fetch failed, using local mock data fallback.", err);
        const filtered = getFilteredMockGames(gameQuery);
        setData(filtered.slice(0, 12));
        setHasNextPage(filtered.length > 12);
        setError(""); // Clear error to render mock data
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
        setData((prev) => [...prev, ...(res.data.results || [])]);
        setHasNextPage(!!res.data.next);
        setFetchingNextPage(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        
        console.warn("Next page fetch failed, appending mock games.", err);
        const filtered = getFilteredMockGames(gameQuery);
        setData((prev) => [...prev, ...filtered.slice(12, 24)]);
        setHasNextPage(false); // No more pages offline
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