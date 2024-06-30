import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CustomSelect from "./components/MultiSelect";
import styles from "./styles.module.css";
const ListPage = () => {
  const [options, setOptions] = useState([
    {
      label: "Option 1",
      value: "opt1",
    },
    {
      label: "Option 2",
      value: "opt2",
    },
    {
      label: "Option 3",
      value: "opt3",
    },
    {
      label: "Option 2",
      value: "opt2",
    },
    {
      label: "Option 3",
      value: "opt3",
    },
    {
      label: "Option 2",
      value: "opt2",
    },
    {
      label: "Option 3",
      value: "opt3",
    },
    {
      label: "Option 2",
      value: "opt2",
    },
    {
      label: "Option 3",
      value: "opt3",
    },
    {
      label: "Option 2",
      value: "opt2",
    },
    {
      label: "Option 3",
      value: "opt3",
    },
    {
      label: "Option 2",
      value: "opt2",
    },
    {
      label: "Option 3",
      value: "opt3",
    },
  ]);

  const handleChangeSelect = (e) => {
    console.log(e);
  };
  return (
    <div className={styles.headerContainer}>
      <SearchBar />
      <div className={styles.filterContainer}>
        <CustomSelect
          options={options}
          placeHolder="Select Categories"
          onChange={(e) => handleChangeSelect(e)}
        />
        <CustomSelect
          options={options}
          placeHolder="Select Sub Categories"
          onChange={(e) => handleChangeSelect(e)}
        />
      </div>
    </div>
  );
};

export default ListPage;
