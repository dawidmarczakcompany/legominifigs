import { FormProvider, useForm } from "react-hook-form";
import PurchaseForm from "./PurchaseForm";
import PurchaseSummary from "./PurchaseSummary";
import styles from "./index.module.scss";
import { Purchase, PurchaseFormType } from "types/purchase";
import { useNavigate, useParams } from "react-router-dom";
import { submitPurchase } from "actions/purchase";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const PurchasePage = () => {
  const { id: minifigId } = useParams();
  const navigate = useNavigate();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const formMethods = useForm<PurchaseFormType>({
    mode: "onChange",
  });

  const { handleSubmit } = formMethods;

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
        navigate(`/`, { replace: true });
      })
      .catch(() => {
        console.log("E");
      })
      .finally(() => setIsPurchasing(false));
  };

  console.log(isPurchasing, "isPUR");

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onPurchaseSubmit)} className={styles.form}>
        <div className={styles.purchaseWrapper}>
          <PurchaseForm />
          <PurchaseSummary isPurchasing={isPurchasing} />
        </div>
      </form>
    </FormProvider>
  );
};

export default PurchasePage;
