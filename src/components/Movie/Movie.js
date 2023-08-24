import React from "react";
import styles from "./Movie.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarRateIcon from "@mui/icons-material/StarRate";

const Movie = (props) => {
  const { movie, setMovie } = props;
  const imageUrl = process.env.REACT_APP_IMAGE_URL + movie.backdrop_path;
  return (
    <div
      style={{
        backgroundImage: ` linear-gradient(
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0.4)) ,url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
      }}
      className={styles.container}
    >
      <div className={styles.icon}>
        <ArrowBackIcon
          fontSize="inherit"
          onClick={() => {
            setMovie(null);
          }}
        />
      </div>
      <div className={styles.banner}>
        <div className={styles.content}>
          <div className={styles.name}>{movie.original_title}</div>{" "}
          <div className={styles.rating}>
            <div>{movie.vote_average.toFixed(1)}</div>
            <StarRateIcon fontSize="inherit" />
          </div>
        </div>
        <div className={styles.year}>{movie.release_date.split("-")[0]}</div>
        <div className={styles.description}>{movie.overview}</div>
      </div>
    </div>
  );
};

export default Movie;
