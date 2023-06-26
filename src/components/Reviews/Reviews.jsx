import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/movie-service';
import { Author, Content, NoReview, Review } from './Reviews.styled';

const Reviews = () => {
  const [moviesReviews, setMoviesReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => {
      setMoviesReviews(results);
    });
  }, [movieId]);

  return (
    <>
      {moviesReviews.length > 0 ? (
        moviesReviews.map(({ id, author, content }) => {
          return (
            <Review key={id}>
              <li>
                <Author>@{author}</Author>
              </li>
              <li>
                <Content>{content}</Content>
              </li>
            </Review>
          );
        })
      ) : (
        <NoReview>Sorry, there are no reviews available for this movie </NoReview>
      )}
    </>
  );
};

export default Reviews;