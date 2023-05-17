import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div className={style.searchBar}>
      <input
        type="search"
        className={style.input}
        placeholder="Personajes"
        autocomplete="off"
        onChange={handleChange}
        value={id}
      />
      <button
        className={style.buttonSubmit}
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
