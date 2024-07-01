import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CustomSelect from "./components/MultiSelect";
import ListCard from "./components/ListCard";
import styles from "./styles.module.css";

const ListPage = () => {
  const categoriesOpts = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
  ];

  const subCategoriesOpts = [
    "Subcategory A",
    "Subcategory B",
    "Subcategory C",
    "Subcategory D",
  ];
  const items = [
    {
      id: 1,
      name: "Item 1",
      category: "Category 1",
      subcategory: "Subcategory A",
    },
    {
      id: 2,
      name: "Item 2",
      category: "Category 2",
      subcategory: "Subcategory B",
    },
    {
      id: 3,
      name: "Item 3",
      category: "Category 1",
      subcategory: "Subcategory C",
    },
    {
      id: 4,
      name: "Item 4",
      category: "Category 3",
      subcategory: "Subcategory A",
    },
    {
      id: 5,
      name: "Item 5",
      category: "Category 4",
      subcategory: "Subcategory B",
    },
    {
      id: 6,
      name: "Item 6",
      category: "Category 1",
      subcategory: "Subcategory D",
    },
    {
      id: 7,
      name: "Item 7",
      category: "Category 2",
      subcategory: "Subcategory A",
    },
    {
      id: 8,
      name: "Item 8",
      category: "Category 3",
      subcategory: "Subcategory B",
    },
    {
      id: 9,
      name: "Item 9",
      category: "Category 4",
      subcategory: "Subcategory C",
    },
    {
      id: 10,
      name: "Item 10",
      category: "Category 4",
      subcategory: "Subcategory A",
    },
    {
      id: 11,
      name: "Item 11",
      category: "Category 2",
      subcategory: "Subcategory C",
    },
    {
      id: 12,
      name: "Item 12",
      category: "Category 3",
      subcategory: "Subcategory D",
    },
    {
      id: 13,
      name: "Item 13",
      category: "Category 1",
      subcategory: "Subcategory B",
    },
    {
      id: 14,
      name: "Item 14",
      category: "Category 3",
      subcategory: "Subcategory C",
    },
    {
      id: 15,
      name: "Item 15",
      category: "Category 2",
      subcategory: "Subcategory D",
    },
    {
      id: 16,
      name: "Item 16",
      category: "Category 4",
      subcategory: "Subcategory D",
    },
  ];

  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    handleFilters();
  }, [searchTerm, categories, subCategories]);

  const handleFilters = () => {
    const frequencyCounter = {};
    let rank = 0;
    rank = handleSearchFilter(rank, frequencyCounter);
    rank = handleCategoriesFilter(rank, frequencyCounter);
    rank = handleSubCategoriesFilter(rank, frequencyCounter);
    const keysArr = [];
    Object.keys(frequencyCounter).forEach((key) => {
      if (frequencyCounter[key] == rank) keysArr.push(key);
    });
    const ItemsArr = items.filter((item) => keysArr.includes(String(item.id)));
    if (rank) setFilteredItems(ItemsArr);
    else setFilteredItems(items);
  };

  const handleSearchFilter = (rank, frequencyCounter) => {
    if (searchTerm && searchTerm.length > 2) {
      rank++;
      items.forEach((item) => {
        if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          frequencyCounter[String(item.id)] =
            (frequencyCounter[String(item.id)] || 0) + 1 || 1;
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
            (frequencyCounter[String(item.id)] || 0) + 1 || 1;
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
            (frequencyCounter[String(item.id)] || 0) + 1 || 1;
        }
      });
    }
    return rank;
  };
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
