import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const MovieList = (props) => {
  const { movieData, isLoading, setMovieData, getMovies, setMovie } = props;
  const setMovieToDisplay = (id) => {
    const movie = movieData.find((m) => m.id === id);
    setMovie(movie);
  };
  return (
    <div>
      {!isLoading && movieData.length > 0 && (
        <div className={styles.container}>
          {movieData.map((movie) => (
            <MovieCard
              id={movie.id}
              image={movie.poster_path}
              description={movie.overview}
              name={movie.original_title}
              rating={movie.vote_average}
              setMovieToDisplay={setMovieToDisplay}
            />
          ))}
        </div>
      )}
      {isLoading && (
        <div className={styles.loading}>
          Loading the latest upcoming movies ...
        </div>
      )}
      {!isLoading && movieData.length === 0 && (
        <div className={styles.loading}>No Movies Found , Try again later.</div>
      )}
      {!isLoading && movieData && movieData.length > 0 && (
        <div className={styles.pagination}>
          <Stack spacing={2}>
            <Pagination
              count={20}
              shape="rounded"
              onChange={(e, page) => {
                setMovieData([]);
                getMovies(page);
              }}
            />
          </Stack>
        </div>
      )}
    </div>
  );
};

export default MovieList;
