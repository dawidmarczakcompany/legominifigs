import { Minifig } from "types/minifigs";
import styles from "./index.module.scss";
import Button from "components/Button";
import cn from "classnames";
interface MinifigListItemProps {
  minifig: Minifig;
  onClick: (minifig: Minifig) => void;
  active?: boolean;
  testId?: string;
}

const MinifigListItem = ({
  minifig,
  onClick,
  active,
  testId,
}: MinifigListItemProps) => {
  const onMinifigClick = () => onClick(minifig);

  const onShowDetailsClick = () => window.open(minifig.set_url, "_blank");

  return (
    <div
      className={cn(styles.itemWrapper, { [styles.activeItemWrapper]: active })}
      onClick={onMinifigClick}
      data-testid={testId}
    >
      <img
        src={minifig.set_img_url}
        className={styles.itemImg}
        alt={minifig.name}
      />

      <p className={styles.itemTitle}>{minifig.name}</p>

      <Button
        variant="secondary"
        className={styles.detailsButton}
        onClick={(e) => {
          e.stopPropagation();
          onShowDetailsClick();
        }}
      >
        Show details
      </Button>
    </div>
  );
};

export default MinifigListItem;
