import useDrawMinifigs from "hooks/useDrawMinifigs";
import styles from "./index.module.scss";
import { useMemo, useState } from "react";
import { MINIFIGS_LIST_COUNT } from "utils/contants";
import MinifigListItem from "components/MinifigListItem";
import Button from "components/Button";
import { Minifig } from "types/minifigs";

const Draw = () => {
  const [selectedMinifig, setSelectedMinifig] = useState<Minifig>();
  const { minifigs } = useDrawMinifigs();

  const minifigsList = useMemo(
    () =>
      (minifigs || [])
        .sort(() => 0.5 - Math.random())
        .slice(0, MINIFIGS_LIST_COUNT),
    [minifigs]
  );

  if (!minifigs?.length) {
    return null;
  }

  return (
    <div className={styles.drawWrapper}>
      <h1 className={styles.drawTitle}>Choose you minifig</h1>

      <div className={styles.drawList}>
        {minifigsList.map((minifig) => (
          <MinifigListItem
            key={minifig.set_num}
            minifig={minifig}
            onClick={setSelectedMinifig}
            active={minifig.set_num === selectedMinifig?.set_num}
          />
        ))}
      </div>

      <Button disabled={!selectedMinifig} onClick={() => {}} variant="primary">
        Proceed to shipment
      </Button>
    </div>
  );
};

export default Draw;
