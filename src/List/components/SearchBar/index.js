import styles from "./styles.module.css";
import SearchIcon from "../../../assets/imgs/search.js";
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchIcon className={styles.searchIcon} />
    </div>
  );
}

export default SearchBar;
