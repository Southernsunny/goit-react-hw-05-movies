// import { useEffect } from "react";

import { Link } from "react-router-dom";

const Movies = () => {
  // useEffect(() => {

  // },[])
   return <div>{['Movie-1', 'Movie-2', 'Movie-3', 'Movie-4'].map(movie => {
      return <Link key={movie} to={`${movie}`}>{movie}</Link>
  })}</div>;
};
export default Movies;
