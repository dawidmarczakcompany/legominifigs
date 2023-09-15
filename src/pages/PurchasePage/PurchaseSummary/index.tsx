import Button from "components/Button";
import PurchaseSummaryList from "../PurchaseSummaryList";
import styles from "./index.module.scss";
import useMinifigDetails from "hooks/useMinifigDetails";
import { PurchaseFormType } from "types/purchase";
import { useFormContext } from "react-hook-form";
import Loader from "components/Loader";

interface PurchaseSummaryProps {
  isPurchasing?: boolean;
}

const PurchaseSummary = ({ isPurchasing }: PurchaseSummaryProps) => {
  const { minifig, minifigParts } = useMinifigDetails();
  const {
    formState: { isValid },
  } = useFormContext<PurchaseFormType>();

  return (
    <div className={styles.summaryWrapper}>
      <h2 className={styles.summaryTitle}>Summary</h2>

      {!minifig ? (
        <Loader className={styles.loader} />
      ) : (
        <>
          <div className={styles.summaryContent}>
            <img
              src={minifig.set_img_url}
              alt={minifig.name}
              className={styles.summaryMinifigImg}
            />

            <p>{minifig.name}</p>

            <PurchaseSummaryList minifigParts={minifigParts} />
          </div>

          <div className={styles.summarySubmit}>
            {!isValid && (
              <span className={styles.summaryMessage}>
                Fill the shipping details to finish the purchase.
              </span>
            )}

            <Button
              disabled={!isValid || isPurchasing}
              variant="primary"
              className={styles.submitButton}
              type="submit"
            >
              SUBMIT
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default PurchaseSummary;
