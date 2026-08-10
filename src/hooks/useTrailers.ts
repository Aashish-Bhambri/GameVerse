import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";
import { getFallbackTrailers } from "../data/mock-details";

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
      .get<FetchResponse>(`/movies`, { params: { slug } })
      .then((res) => {
        setTrailers(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Trailers fetch failed, loading offline trailers.", err);
        setTrailers(getFallbackTrailers(slug));
        setError(""); // Clear error to allow mock render
        setLoading(false);
      });
  }, [slug]);

  return { trailers, error, isLoading };
};

export default useTrailers;
