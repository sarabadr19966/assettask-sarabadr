import React from "react";
import styles from "./styles.module.css";
import SearchIcon from "../../../assets/imgs/search.svg";
function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search by name..."
      />
      <img src={SearchIcon} alt="search-icon" className={styles.searchIcon} />
    </div>
  );
}

export default SearchBar;
