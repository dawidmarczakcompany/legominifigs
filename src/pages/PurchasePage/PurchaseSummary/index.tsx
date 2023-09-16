import Button from "components/Button";
import PurchaseSummaryList from "../PurchaseSummaryList";
import styles from "./index.module.scss";
import useMinifigDetails from "hooks/useMinifigDetails";
import { PurchaseFormType } from "types/purchase";
import { useFormContext } from "react-hook-form";
import Loader from "components/Loader";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

interface PurchaseSummaryProps {
  isPurchasing?: boolean;
}

const PurchaseSummary = ({ isPurchasing }: PurchaseSummaryProps) => {
  const {
    minifig,
    minifigParts,
    errorFetchingMinifig,
    errorFetchingMinifigParts,
  } = useMinifigDetails();
  const {
    formState: { isValid },
  } = useFormContext<PurchaseFormType>();
  const navigate = useNavigate();
  const onGoHomeClick = () => navigate("/", { replace: true });

  if (errorFetchingMinifig) {
    return (
      <div className={cn(styles.summaryWrapper, styles.summaryError)}>
        <span data-testid="PurchaseSummary__ErrorMessage">
          Unfortunately we could not fetch details of selected minifig. Please
          try again or check your internet connection.
        </span>
        <Button
          testId="PurchaseSummary__GoHomeButton"
          variant="primary"
          onClick={onGoHomeClick}
        >
          Go home
        </Button>
      </div>
    );
  }

  if (!minifig) {
    return (
      <div className={styles.summaryWrapper}>
        <Loader testId="PurchaseSummary__Loader" />
      </div>
    );
  }

  return (
    <div
      className={styles.summaryWrapper}
      data-testid="PurchaseSummary__Wrapper"
    >
      <h2 className={styles.summaryTitle}>Summary</h2>

      <div className={styles.summaryContent}>
        <img
          src={minifig.set_img_url}
          alt={minifig.name}
          className={styles.summaryMinifigImg}
        />

        <p data-testid>{minifig.name}</p>

        <PurchaseSummaryList
          minifigParts={minifigParts}
          errorFetchingMinifigParts={errorFetchingMinifigParts}
        />
      </div>

      <div className={styles.summarySubmit}>
        {!isValid && (
          <span
            className={styles.summaryMessage}
            data-testid="PurchaseSummary__InfoMessage"
          >
            Fill the shipping details to finish the purchase.
          </span>
        )}

        <Button
          disabled={!isValid || isPurchasing}
          variant="primary"
          className={styles.submitButton}
          type="submit"
          loading={isPurchasing}
          testId="PurchaseSummary__SubmitButton"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default PurchaseSummary;
