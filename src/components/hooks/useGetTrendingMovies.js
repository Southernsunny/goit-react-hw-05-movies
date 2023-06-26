import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/movie-service';

export const useGetTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const response = await getTrendingMovies();
        setMovies(response);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return {
    movies,
    isError,
    isLoading,
  };
};
