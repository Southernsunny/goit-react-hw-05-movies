import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/movie-service';
import Searchbar from 'components/Searchbar';
import MovieGallery from 'components/MovieGallery';
import Loader from 'components/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const searchQuery = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    if (!searchQuery) return;
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const response = await searchMovies(searchQuery);
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [searchQuery]);

  const handleSearchSubmit = query => {
    setSearchParams({ searchQuery: query.toLowerCase() });
  };

  const updateQueryString = event => {
    const searchQueryValue = event.target.value;
    const nextParams = searchQueryValue !== '' ? { searchQuery: searchQueryValue } : {};
    setSearchParams(nextParams);
  };

  const visibleMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Searchbar onSubmit={handleSearchSubmit} value={searchQuery} onChange={updateQueryString} />
      {isLoading ? <Loader /> : <MovieGallery movies={visibleMovies} />}
    </>
  );
};

export default Movies;
