import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const { onSearch } = props;
  return (
    <div className={style.searchBar}>
      <input type="search" />
      <button onClick={onSearch}>Agregar</button>
    </div>
  );
}
