import { MinifigPart } from "types/minifigs";
import styles from "./index.module.scss";

interface PurchaseSummaryListProps {
  minifigParts?: MinifigPart[];
}

const PurchaseSummaryList = ({ minifigParts }: PurchaseSummaryListProps) => {
  if (!minifigParts?.length) {
    return null;
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
            <span>{part.name}</span>
            <span className={styles.partItemId}>{id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseSummaryList;
