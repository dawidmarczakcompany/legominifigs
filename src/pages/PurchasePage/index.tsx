import { FormProvider, useForm } from "react-hook-form";
import PurchaseForm from "./PurchaseForm";
import PurchaseSummary from "./PurchaseSummary";
import styles from "./index.module.scss";
import { PurchaseFormType } from "types/purchase";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTE } from "utils/navigation";

const PurchasePage = () => {
  const navigate = useNavigate();
  const formMethods = useForm<PurchaseFormType>({
    mode: "onSubmit",
  });

  const { handleSubmit } = formMethods;

  //In more complex scenario, data should be saved somewhere; Here just moving to success page as the form was filled correctly
  const onPurchaseSubmit = (data: PurchaseFormType) =>
    navigate(`/${PAGE_ROUTE.MINIFIG_SUCCESS}`, { replace: true });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onPurchaseSubmit)} className={styles.form}>
        <div className={styles.purchaseWrapper}>
          <PurchaseForm />
          <PurchaseSummary />
        </div>
      </form>
    </FormProvider>
  );
};

export default PurchasePage;
