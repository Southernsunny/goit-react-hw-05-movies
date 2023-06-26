import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImg, Title } from './MovieGalleryItem.styled';

const MovieGalleryItem = ({ id, title, poster_path, location }) => {
  return (
    <GalleryItem key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {poster_path ? (
          <GalleryImg
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            loading="lazy"
          />
        ) : (
          <GalleryImg
            src="https://i.pinimg.com/564x/fa/30/62/fa3062404e71e0b5d4085bd411c60816.jpg"
            alt="NoPhoto"
            loading="lazy"
          />
        )}
        <Title>{title}</Title>
      </Link>
    </GalleryItem>
  );
};

MovieGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  location: PropTypes.object.isRequired,
};


export default MovieGalleryItem;
