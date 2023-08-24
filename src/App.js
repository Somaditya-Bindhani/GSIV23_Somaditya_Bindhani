import "./App.css";
import MovieList from "./components/MovieList.js/MovieList";
import Navbar from "./components/Navbar/Navbar";
import useHttp from "../src/hooks/use-http";
import { useCallback, useEffect, useState } from "react";
import Movie from "./components/Movie/Movie";
function App() {
  const [text, setText] = useState(null);
  const { isLoading, sendRequest } = useHttp();
  const [movieData, setMovieData] = useState([]);
  const [movie, setMovie] = useState();

  //getting the movie from server for both search and upcoming movie
  //Using the same function and same state for code reusablility
  const getMovies = useCallback(
    async (page, isSearch = false) => {
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
    },
    [sendRequest, text]
  );

  //Searches will call the api to get the movie data after 1s of no typing 
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text !== null) {
        getMovies(1, true);
      } else {
        getMovies(1, false);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [text, getMovies]);

  //load movies in the intial loading of the page
  useEffect(() => {
    getMovies(1);
  }, [getMovies]);

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
