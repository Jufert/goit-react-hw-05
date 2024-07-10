import { fetchMovieReviews } from "../../services/apiMovieReviews";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  if (reviews.length !== 0) {
    return (
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>Author:{review.author}</h3>
            <p>Review:{review.content}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>We don`t have any reviews for this movie.</p>;
  }
}

export default MovieReviews;