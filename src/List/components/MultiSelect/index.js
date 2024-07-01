import { useState, useEffect, useRef } from "react";
import CloseIcon from "../../../assets/imgs/closeIcon";
import DropdownIcon from "../../../assets/imgs/dropdownIcon";
import styles from "./styles.module.css";

const CustomSelect = ({ placeHolder, options, onChange }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return placeHolder;
    }
    return (
      <div className={styles.dropdownTags}>
        {selectedValue.map((option, index) => (
          <div key={`${option}-${index}`} className={styles.dropdownTagItem}>
            {option}
            <span
              onClick={(e) => onTagRemove(e, option)}
              className={styles.dropdownTagClose}
            >
              <CloseIcon />
            </span>
          </div>
        ))}
      </div>
    );
  };

  const removeOption = (option) => {
    return selectedValue.filter((opt) => opt !== option);
  };

  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const onItemClick = (option) => {
    let newValue;
    if (selectedValue.findIndex((opt) => opt === option) >= 0) {
      newValue = removeOption(option);
    } else {
      newValue = [...selectedValue, option];
    }

    setSelectedValue(newValue);
    onChange(newValue);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.filter((opt) => opt === option).length > 0;
  };

  return (
    <div className={styles.dropdownContainer} tabIndex={0}>
      <div
        ref={inputRef}
        onClick={handleInputClick}
        className={styles.dropdownInput}
      >
        <div
          className={`${styles.dropdownSelectedValue} ${
            !selectedValue || selectedValue.length === 0
              ? styles.placeholder
              : ""
          }`}
        >
          {getDisplay()}
        </div>
        <div className={styles.dropdownTools}>
          <div className={styles.dropdownTool}>
            <DropdownIcon className={showMenu ? styles.rotate : ""} />
          </div>
        </div>
      </div>

      {showMenu && (
        <div className={styles.dropdownMenu}>
          {options.map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option}
              className={`${styles.dropdownItem} ${
                isSelected(option) && styles.selected
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
