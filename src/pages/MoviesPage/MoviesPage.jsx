import { fetchSearchMovies } from "../../services/apiSearchMovies";
import MovieList from "../../components/MovieList/MovieList";
import { Form, Formik, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MoviesPage() {
  const notify = () =>
    toast("Oops! Looks like you forgot to fill out the input field.", {
      position: "top-center",
      duration: 4000,
    });

  const initialValues = {
    searchTerm: "",
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [films, setFilms] = useState(null);

  const handleSubmit = (values, actions) => {
    if (!values.searchTerm) {
      notify();
      return;
    } else {
      setSearchParams({ query: values.searchTerm });
    }
    actions.resetForm();
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetchSearchMovies(query);
        setFilms(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [query]);
  return (
    <>
      <Link to="/">Go Back</Link>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            id="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="searchTerm"
          />
          <br />
          <button type="submit"> Search</button>
        </Form>
      </Formik>

      {films && <MovieList movie={films} />}
    </>
  );
}

export default MoviesPage;