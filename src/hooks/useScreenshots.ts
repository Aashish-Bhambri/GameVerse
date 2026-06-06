import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";

export interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

interface FetchResponse {
  count: number;
  results: Screenshot[];
}

const useScreenshots = (slug: string) => {
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    apiClient
      .get<FetchResponse>(`/games/${slug}/screenshots`)
      .then((res) => {
        setScreenshots(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  return { screenshots, error, isLoading };
};

export default useScreenshots;
