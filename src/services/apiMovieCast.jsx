import axios from "axios";

export const fetchMovieCast = async (id) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzFjMWFmZjkxYzhhMGM1MDI4MmEzNTJhOTEwZjI1MCIsIm5iZiI6MTcxOTUyOTM1OS4yMTQzNjMsInN1YiI6IjY2N2RlOTlmMzczMTdkMDI4OGMyMTQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f7gQNBeNZM93btgO6eSVuDqnz85qwjMSuwP9J_JdqqY",
    },
  };

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    options
  );

  return data;
};
