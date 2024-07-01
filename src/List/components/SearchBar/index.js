import styles from "./styles.module.css";
import SearchIcon from "../../../assets/imgs/search.svg";
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
      <img src={SearchIcon} alt="search-icon" className={styles.searchIcon} />
    </div>
  );
}

export default SearchBar;
