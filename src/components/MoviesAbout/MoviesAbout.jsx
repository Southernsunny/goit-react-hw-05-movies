import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { About, Container, Description, Image,  MainTitle, Title } from './MoviesAbout.styled';

const MovieAbout = ({ movieDetails }) => {
  const { poster_path, title, genres, overview, vote_average, release_date } = movieDetails;

  return (
    <>
      <Container>
        <div>
          {poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              loading="lazy"
            />
          ) : (
            <Image
              src="https://i.pinimg.com/564x/a1/85/30/a18530156b801a7b5360c3dc3a05e16e.jpg"
              alt="NoPhoto"
              loading="lazy"
            />
          )}
        </div>
        <Description>
          {title && (
            <MainTitle>
              {title} {release_date.substr(0, 4)}
            </MainTitle>
          )}

          <p>User Score: {vote_average && Math.floor(vote_average * 10)}%</p>
          <Title>Overview</Title>
          <p>{overview}</p>
          <Title>Genres</Title>
          {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
        </Description>
      </Container>
      <Title>
        Additional information about <span style={{ color: '#e8b67f' }}>{title}</span>
      </Title>
      <About>
        <li>
          <StyleLink to="cast">Cast</StyleLink>
        </li>
        <li>
          <StyleLink to="reviews">Reviews</StyleLink>
        </li>
      </About>
    </>
  );
};

const StyleLink = styled(Link)`
  color: white;
  font-size: 22px;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: rgba(232, 182, 127, 0.6);
  &:hover {
    border: 1px dotted white;
  }
`;

MovieAbout.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
  }).isRequired,
};

export default MovieAbout;
