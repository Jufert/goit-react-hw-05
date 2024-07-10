import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/apiHomePage";

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const trendingMovies = await fetchMovies();
        setFilms(trendingMovies.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <MovieList movie={films} />
    </div>
  );
};

export default HomePage;