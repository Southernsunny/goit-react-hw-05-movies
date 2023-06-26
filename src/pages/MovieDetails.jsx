import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/movie-service';
import Loader from 'components/Loader';
import MovieAbout from 'components/MoviesAbout/MoviesAbout';
import styled from '@emotion/styled';

const MoviesDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(movieId).then(setMoviesDetails);
  }, [movieId]);

  return (
    <>
      <BtnBox>
        <LinkBtn to={backLinkLocation.current}>← Back</LinkBtn>
      </BtnBox>
      <MovieAbout movieDetails={moviesDetails} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

const BtnBox = styled.div`
  display: flex;
  width: 1250px;
  background: transparent;
`;

const LinkBtn = styled(Link)`
  margin-bottom: 20px;
  color: white;
  font-size: 22px;
  padding: 5px 10px;
  border: 1px solid transparent;
  background-color: rgba(179, 202, 224, 0.5);
  border-radius: 20px;
  &.active {
    color: lightskyblue;
  }
  &:hover {
    border: 1px solid lightskyblue;
  }
`;

export default MoviesDetails;
