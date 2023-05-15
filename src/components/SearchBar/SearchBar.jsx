import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const { onSearch } = props;
  return (
    <div className={style.searchBar}>
      <input
        type="search"
        className={style.input}
        placeholder="Personajes"
        autocomplete="off"
      />
      <button className={style.buttonSubmit} onClick={onSearch}>
        Agregar
      </button>
    </div>
  );
}
