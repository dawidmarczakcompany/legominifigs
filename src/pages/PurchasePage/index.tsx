import { FormProvider, useForm } from "react-hook-form";
import PurchaseForm from "./PurchaseForm";
import PurchaseSummary from "./PurchaseSummary";
import styles from "./index.module.scss";
import { Purchase, PurchaseFormType } from "types/purchase";
import { useNavigate, useParams } from "react-router-dom";
import { submitPurchase } from "actions/purchase";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import toast from "react-hot-toast";
import { DEFAULT_TOAST_DURATION } from "utils/constants";

const PurchasePage = () => {
  const { id: minifigId } = useParams();
  const navigate = useNavigate();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const formMethods = useForm<PurchaseFormType>({
    mode: "onChange",
  });

  const onPurchaseSubmit = async (data: PurchaseFormType) => {
    if (!minifigId) {
      return;
    }

    setIsPurchasing(true);

    const purchase: Purchase = {
      purchaseId: uuidv4(),
      shippingDetails: data,
      minifigId,
    };

    submitPurchase(purchase)
      .then(() => {
        toast.success(
          "Success! Your minifig will be now shipped to provided address.",
          { duration: DEFAULT_TOAST_DURATION },
        );
        navigate(`/`, { replace: true });
      })
      .catch(() => {
        toast.error(
          "There was an issue when submitting your purchase. Please try again.",
          { duration: DEFAULT_TOAST_DURATION },
        );
      })
      .finally(() => setIsPurchasing(false));
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onPurchaseSubmit)}
        className={styles.form}
      >
        <div className={styles.purchaseWrapper}>
          <PurchaseForm />
          <PurchaseSummary isPurchasing={isPurchasing} />
        </div>
      </form>
    </FormProvider>
  );
};

export default PurchasePage;
