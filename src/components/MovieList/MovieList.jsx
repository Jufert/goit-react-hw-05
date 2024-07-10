import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movie }) => {
  const location = useLocation();

  return (
    <ul>
      {movie.map((movie) => (
        <li key={movie.id}>
          <Link to={{ pathname: `/movies/${movie.id}`, state: { location } }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;