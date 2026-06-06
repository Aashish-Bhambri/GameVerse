import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";
import { type Game, type Platform } from "./useGames";

export interface Developer {
  id: number;
  name: string;
  slug: string;
}

export interface Publisher {
  id: number;
  name: string;
  slug: string;
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface GameDetails extends Game {
  description_raw: string;
  released: string;
  updated: string;
  rating_top: number;
  ratings: Rating[];
  developers: Developer[];
  publishers: Publisher[];
  website: string;
  reddit_url: string;
  playtime: number;
  genres: Genre[];
  platforms: { platform: Platform }[];
}

const useGame = (slug: string) => {
  const [game, setGame] = useState<GameDetails | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    // RAWG API endpoint for a single game is /games/{slug}
    apiClient
      .get<GameDetails>(`/games/${slug}`)
      .then((res) => {
        setGame(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  return { game, error, isLoading };
};

export default useGame;
