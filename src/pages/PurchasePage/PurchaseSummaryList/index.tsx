import { MinifigPart } from "types/minifigs";
import styles from "./index.module.scss";
import Loader from "components/Loader";

interface PurchaseSummaryListProps {
  minifigParts?: MinifigPart[];
  errorFetchingMinifigParts?: boolean;
}

const PurchaseSummaryList = ({
  minifigParts,
  errorFetchingMinifigParts,
}: PurchaseSummaryListProps) => {
  if (errorFetchingMinifigParts) {
    return (
      <span className={styles.errorMessage}>
        Unfortunately we couldn't fetch parts included in selected minifig. You
        can continue your purchase anyway.
      </span>
    );
  }

  if (!minifigParts) {
    return <Loader />;
  }

  return (
    <div className={styles.partsListWrapper}>
      There are {minifigParts.length} parts in this minifig:
      {minifigParts.map(({ part, id }) => (
        <div className={styles.partItem} key={id}>
          <img
            src={part.part_img_url}
            alt={part.name}
            className={styles.partItemImg}
          />

          <div className={styles.partItemDetails}>
            <span className={styles.partItemName}>{part.name}</span>
            <span className={styles.partItemId}>{id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseSummaryList;
