import "./App.css";
import MovieList from "./components/MovieList.js/MovieList";
import Navbar from "./components/Navbar/Navbar";
import useHttp from "../src/hooks/use-http";
import { useEffect, useState } from "react";
import Movie from "./components/Movie/Movie";
function App() {
  const [text, setText] = useState(null);
  const { isLoading, isError, sendRequest, clearError } = useHttp();
  const [movieData, setMovieData] = useState([]);
  const [movie, setMovie] = useState();
  const getMovies = async (page, isSearch = false) => {
    try {
      const url = isSearch
        ? `${process.env.REACT_APP_URL}/search/movie?query=${text}&language=en-US&page=${page}`
        : `${process.env.REACT_APP_URL}/movie/upcoming?language=en-US&page=${page}`;
      console.log(url);
      const data = await sendRequest(url, "GET", null, {
        Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
      });
      setMovieData(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text !== null) {
        getMovies(1, true);
      } else {
        getMovies(1, false);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [text]);
  useEffect(() => {
    getMovies(1);
  }, []);
  return (
    <div>
      {!movie && (
        <>
          <Navbar setText={setText} text={text} getMovies={getMovies} />
          <MovieList
            movieData={movieData}
            setMovieData={setMovieData}
            isLoading={isLoading}
            getMovies={getMovies}
            setMovie={setMovie}
          />
        </>
      )}
      {movie && <Movie movie={movie} setMovie={setMovie} />}
    </div>
  );
}

export default App;
