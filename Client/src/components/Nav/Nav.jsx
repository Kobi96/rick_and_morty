import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../helpers/RoutesPath";

const Nav = (props) => {
  const { onSearch, randomCharacter } = props;
  return (
    <div className={style.nav}>
      <div className={style.linkButtons}>
        <SearchBar onSearch={onSearch} />
        <div>
          <Link to={ROUTES.ABOUT}>
            <button className={style.button}>About</button>
          </Link>
          <Link to={ROUTES.HOME}>
            <button className={style.button}>Home</button>
          </Link>
          <Link to={ROUTES.FAVORITES}>
            <button className={style.button}>Favorites</button>
          </Link>
        </div>
      </div>
      <button className={style.button} onClick={randomCharacter}>
        Random
      </button>
    </div>
  );
};

export default Nav;
