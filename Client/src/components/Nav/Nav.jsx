import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../helpers/RoutesPath";

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div className={style.nav}>
      <SearchBar onSearch={onSearch} />
      <Link to={ROUTES.ABOUT}>
        <button>About</button>
      </Link>
      <Link to={ROUTES.HOME}>
        <button>Home</button>
      </Link>
      <Link to={ROUTES.FAVORITES}>
        <button>Favorites</button>
      </Link>
    </div>
  );
};

export default Nav;
