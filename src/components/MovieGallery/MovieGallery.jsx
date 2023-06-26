import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieGalleryItem from 'components/MovieGalleryItem';
import { Gallery} from './MovieGallery.styled';

const MovieGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <Gallery>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <MovieGalleryItem
              key={id}
              id={id}
              title={title}
              poster_path={poster_path}
              location={location}
            />
          );
        })}
      </Gallery>
      <Outlet />
    </>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieGallery;
