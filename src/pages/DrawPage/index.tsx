import useDrawMinifigs from "hooks/useDrawMinifigs";
import styles from "./index.module.scss";
import { useMemo, useState } from "react";
import { MINIFIGS_LIST_COUNT } from "utils/contants";
import MinifigListItem from "pages/DrawPage/MinifigListItem";
import Button from "components/Button";
import { Minifig } from "types/minifigs";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTE } from "utils/navigation";
import Loader from "components/Loader";

const DrawPage = () => {
  const [selectedMinifig, setSelectedMinifig] = useState<Minifig>();
  const { minifigs } = useDrawMinifigs();
  const navigate = useNavigate();

  const onProceedClick = () => {
    if (!selectedMinifig) {
      return;
    }

    navigate(`/${PAGE_ROUTE.MINIFIG_PURCHASE}/${selectedMinifig.set_num}`);
  };

  const minifigsList = useMemo(
    () =>
      (minifigs || [])
        .sort(() => 0.5 - Math.random())
        .slice(0, MINIFIGS_LIST_COUNT),
    [minifigs],
  );

  if (!minifigs?.length) {
    return <Loader className={styles.loader} />;
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

      <Button
        disabled={!selectedMinifig}
        onClick={onProceedClick}
        variant="primary"
      >
        Proceed to shipment
      </Button>
    </div>
  );
};

export default DrawPage;
