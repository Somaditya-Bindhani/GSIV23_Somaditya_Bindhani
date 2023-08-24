import React from "react";
import styles from "./MovieCard.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
const MovieCard = (props) => {
  const { id, image, description, name, rating, setMovieToDisplay } = props;
  const imageUrl = process.env.REACT_APP_IMAGE_URL + image;
  return (
    <div
      className={styles.container}
      onClick={() => {
        setMovieToDisplay(id);
      }}
    >
      <img
        src={imageUrl}
        className={styles.poster}
        onError={(e) => {
          e.target.src = "/404.jpg";
        }}
      />
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.name}>{name}</div>
          <div className={styles.rating}>
            <div>{rating.toFixed(1)}</div>
            <StarRateIcon fontSize="inherit" />
          </div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default MovieCard;
