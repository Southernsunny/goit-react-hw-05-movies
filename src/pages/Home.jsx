import { useGetTrendingMovies } from 'components/hooks/useGetTrendingMovies';
import MovieGallery from 'components/MovieGallery';
import Loader from 'components/Loader';
import { Title } from 'components/MovieGallery/MovieGallery.styled';

const Home = () => {
  const { movies, isError, isLoading } = useGetTrendingMovies();
  if (isLoading) return <Loader />;
  if (isError) return <div>Error</div>;

  return (
    <main>
      <Title>Trending Today :</Title>
      <MovieGallery movies={movies} />
    </main>
  );
};

export default Home;
