import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CustomSelect from "./components/MultiSelect";
import ListCard from "./components/ListCard";
import { getItemsData } from "../api/service";
import Spinner from "../assets/imgs/spinner";
import styles from "./styles.module.css";
import { categoriesOpts, subCategoriesOpts } from "./utils";

const ListPage = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetchDataItems();
  }, []);

  useEffect(() => {
    handleFilters();
  }, [searchTerm, categories, subCategories]);

  const fetchDataItems = () => {
    getItemsData()
      .then((res) => {
        setLoading(false);
        setItems(res.data);
        setFilteredItems(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleFilters = () => {
    const frequencyCounter = {};
    let rank = 0;
    rank = handleSearchFilter(rank, frequencyCounter);
    rank = handleCategoriesFilter(rank, frequencyCounter);
    rank = handleSubCategoriesFilter(rank, frequencyCounter);
    if (rank) {
      const keysArr = [];
      Object.keys(frequencyCounter).forEach((key) => {
        if (frequencyCounter[key] === rank) keysArr.push(key);
      });
      const ItemsArr = items.filter((item) =>
        keysArr.includes(String(item.id))
      );
      setFilteredItems(ItemsArr);
    } else setFilteredItems(items);
  };

  const handleSearchFilter = (rank, frequencyCounter) => {
    if (searchTerm && searchTerm.length > 2) {
      rank++;
      items.forEach((item) => {
        if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          frequencyCounter[String(item.id)] =
            (frequencyCounter[String(item.id)] || 0) + 1;
        }
      });
    }
    return rank;
  };

  const handleCategoriesFilter = (rank, frequencyCounter) => {
    if (categories.length) {
      rank++;
      items.forEach((item) => {
        if (categories.includes(item.category)) {
          frequencyCounter[String(item.id)] =
            (frequencyCounter[String(item.id)] || 0) + 1;
        }
      });
    }
    return rank;
  };

  const handleSubCategoriesFilter = (rank, frequencyCounter) => {
    if (subCategories.length) {
      rank++;
      items.forEach((item) => {
        if (subCategories.includes(item.subcategory)) {
          frequencyCounter[String(item.id)] =
            (frequencyCounter[String(item.id)] || 0) + 1;
        }
      });
    }
    return rank;
  };

  if (loading)
    return (
      <div className={styles.spinner}>
        <Spinner />;
      </div>
    );
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <div className={styles.filterContainer}>
          <CustomSelect
            options={categoriesOpts}
            placeHolder="Select Categories"
            onChange={(values) => setCategories(values)}
          />
          <CustomSelect
            options={subCategoriesOpts}
            placeHolder="Select Sub Categories"
            onChange={(values) => setSubCategories(values)}
          />
        </div>
      </div>
      <ListCard items={filteredItems} />
    </div>
  );
};

export default ListPage;
