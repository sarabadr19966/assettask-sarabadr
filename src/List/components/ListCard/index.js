import styles from "./styles.module.css";
import NoDataIcon from "../../../assets/imgs/noDataIcon";

function ListCard({ items }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.listHeader}>
        <span>Name</span>
        <span>Category</span>
        <span>Sub Category</span>
      </div>
      {items?.length > 0 ? (
        <div className={styles.listContent}>
          {items.map((item) => (
            <div className={styles.listItem} key={item.id}>
              <span>{item.name}</span>
              <span>{item.category}</span>
              <span>{item.subcategory}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noData}>
          <NoDataIcon />
          <span>No results found</span>
        </div>
      )}
    </div>
  );
}

export default ListCard;
