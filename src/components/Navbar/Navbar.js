import { Search } from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";
import React from "react";
import style from "./Navbar.module.css";
import HomeIcon from "@mui/icons-material/Home";
const Navbar = (props) => {
  const { setText, text, getMovies } = props;
  return (
    <div className={style.container}>
      <div className={style.searchContainer}>
        <InputBase
          placeholder="Search"
          margin="dense"
          className={style.searchText}
          value={text}
          onChange={(e) => {
            if (e.target.value === "") {
              setText(null);
            } else {
              setText(e.target.value);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              text === "" ? getMovies(1, true) : getMovies(1, false);
            }
          }}
        />
        <IconButton
          onClick={() => {
            getMovies(1, true);
          }}
        >
          <Search />
        </IconButton>
      </div>
      <HomeIcon
        className={style.icon}
        onClick={(e) => {
          setText(null);
          getMovies(1);
        }}
      />
    </div>
  );
};

export default Navbar;
