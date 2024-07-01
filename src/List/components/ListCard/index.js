import React from "react";
import styles from "./styles.module.css";
import NoDataIcon from "../../../assets/imgs/noDataIcon";
function ListCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.listHeader}>
        <span>Name</span>
        <span>Category</span>
        <span>Sub Category</span>
      </div>
      <div className={styles.listContent}>
        {/* <div className={styles.listItem}>
          <span>Name</span>
          <span>Category</span>
          <span>Sub Category</span>
        </div>
        <div className={styles.listItem}>
          <span>Name</span>
          <span>Category</span>
          <span>Sub Category</span>
        </div>
        <div className={styles.listItem}>
          <span>Name</span>
          <span>Category</span>
          <span>Sub Category</span>
        </div>
        <div className={styles.listItem}>
          <span>Name</span>
          <span>Category</span>
          <span>Sub Category</span>
        </div>
        <div className={styles.listItem}>
          <span>Name</span>
          <span>Category</span>
          <span>Sub Category</span>
        </div>
        <div className={styles.listItem}>
          <span>Name</span>
          <span>Category</span>
          <span>Sub Category</span>
        </div>
        <div className={styles.listItem}>
          <span>Name</span>
          <span>Category</span>
          <span>Sub Category</span>
        </div>
        <div className={styles.listItem}>
          <span>Name</span>
          <span>Category</span>
          <span>Sub Category</span>
        </div>
        <div className={styles.listItem}>
          <span>Name</span>
          <span>Category</span>
          <span>Sub Category</span>
        </div>
        <div className={styles.listItem}>
          <span>Name</span>
          <span>Category</span>
          <span>Sub Category</span>
        </div>
        <div className={styles.listItem}>
          <span>Name</span>
          <span>Category</span>
          <span>Sub Category</span>
        </div> */}
      </div>
      <div className={styles.noData}>
        <NoDataIcon />
        <span>No results found</span>
      </div>
    </div>
  );
}

export default ListCard;
