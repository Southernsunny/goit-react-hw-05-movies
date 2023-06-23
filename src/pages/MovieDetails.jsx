// import { useEffect } from "react";

import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  // useEffect(() => {

  // },[])

  return (
    <>
      <h1>Additional Information 🌙</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        </ul>
        <Outlet/>
    </>
  );
};
export default MovieDetails;
