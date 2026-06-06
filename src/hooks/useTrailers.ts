import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

interface FetchResponse {
  count: number;
  results: Trailer[];
}

const useTrailers = (slug: string) => {
  const [trailers, setTrailers] = useState<Trailer[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    apiClient
      .get<FetchResponse>(`/games/${slug}/movies`)
      .then((res) => {
        setTrailers(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  return { trailers, error, isLoading };
};

export default useTrailers;
