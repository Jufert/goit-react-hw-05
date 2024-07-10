import { fetchMovieCast } from "../../services/apiMovieCast";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieCast() {
  const { movieId } = useParams();
  const [casts, setCast] = useState(null);
  useEffect(() => {
    async function fetchCast() {
      try {
        const response = await fetchMovieCast(movieId);
        const result = response.cast.slice(0, 5);
        setCast(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    casts !== null && (
      <ul>
        {casts.map((cast) => (
          <li key={cast.id}>
            <img
              width="100"
              height="150"
              src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
              alt={`photo ${cast.name}`}
            ></img>
            <h3>{cast.name}</h3>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    )
  );
}

export default MovieCast;