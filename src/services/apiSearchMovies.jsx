import axios from "axios";

export const fetchSearchMovies = async (query) => {
  const options = {
    url: "https://api.themoviedb.org/3/search/movie",
    params: { query },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzFjMWFmZjkxYzhhMGM1MDI4MmEzNTJhOTEwZjI1MCIsIm5iZiI6MTcxOTUyOTM1OS4yMTQzNjMsInN1YiI6IjY2N2RlOTlmMzczMTdkMDI4OGMyMTQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f7gQNBeNZM93btgO6eSVuDqnz85qwjMSuwP9J_JdqqY",
    },
  };

  const { data } = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    options
  );
  return data;
};
