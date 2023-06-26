import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/movie-service';
import { ActorInfo, CastInfo, Character, GalleryImg, Name } from './Cast.styled';

const Cast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(({ cast }) => {
      setMoviesCast(cast);
    });
  }, [movieId]);

  return (
    <CastInfo>
      {moviesCast.length > 0 ? (
        moviesCast.map(({ id, profile_path, character, name }) => (
          <ActorInfo key={id}>
            {profile_path ? (
              <GalleryImg
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                loading="lazy"
              />
            ) : (
              <GalleryImg
                src="https://i.pinimg.com/564x/c1/8f/78/c18f78e832db00967b7301abf0f2abd8.jpg"
                alt="NoPhoto"
                loading="lazy"
              />
            )}
            <Name>{name}</Name>
            <Character>Character: {character.substr(0, 9)}</Character>
          </ActorInfo>
        ))
      ) : (
        <Name>Sorry, there is no information here</Name>
      )}
    </CastInfo>
  );
};

export default Cast;
