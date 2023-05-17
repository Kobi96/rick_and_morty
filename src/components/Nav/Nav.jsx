import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div className={style.nav}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
