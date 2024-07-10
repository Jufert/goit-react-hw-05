import { useLocation, useParams, Link, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { fetchMovieDetails } from "../../services/apiMovieDetails";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetchMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    movieDetails && (
      <div>
        <Link to={backLinkRef.current}>Go back</Link>
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
              width="200"
              height="300"
            />
          </div>
          <div>
            <h1>{movieDetails.title}</h1>
            <br></br>

            <h2>Overview: </h2>
            <p>{movieDetails.overview}</p>
            <br></br>
            <h2>Genres:</h2>
            <p>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
        <div>
          <h2>Additional information:</h2>
          <ul>
            <li>
              <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Routes>
        </div>
      </div>
    )
  );
}

export default MovieDetailsPage;