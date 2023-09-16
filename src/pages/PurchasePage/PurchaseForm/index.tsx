import FormInput from "components/FormInput";
import styles from "./index.module.scss";
import FormGroup from "components/FormGroup";
import { Controller, useFormContext } from "react-hook-form";
import { PurchaseFormType } from "types/purchase";
import {
  PurchaseFormValidationMessages,
  validateDateOfBirth,
  validateEmail,
  validatePhone,
} from "utils/validators";
import { PAST_DATE_MIN_VALUE } from "utils/constants";

const PurchaseForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<PurchaseFormType>();
  const commonFormRules = { required: PurchaseFormValidationMessages.REQUIRED };
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div
      className={styles.purchaseFormWrapper}
      data-testid="PurchaseForm__Wrapper"
    >
      <h1 className={styles.formTitle}>Shipping details</h1>

      <div className={styles.form}>
        <FormGroup>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
              <FormInput
                label="Name"
                onChange={onChange}
                errorMessage={errors.name?.message}
                placeholder="Enter name"
                testId="PurchaseForm__NameInput"
              />
            )}
            rules={{ ...commonFormRules }}
          />

          <Controller
            control={control}
            name="surname"
            render={({ field: { onChange } }) => (
              <FormInput
                label="Surname"
                onChange={onChange}
                errorMessage={errors.surname?.message}
                placeholder="Enter surname"
                testId="PurchaseForm__SurnameInput"
              />
            )}
            rules={{ ...commonFormRules }}
          />
        </FormGroup>

        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { onChange } }) => (
            <FormInput
              label="Phone number"
              onChange={onChange}
              errorMessage={errors.phoneNumber?.message}
              type="tel"
              placeholder="Enter phone number"
              testId="PurchaseForm__PhoneInput"
            />
          )}
          rules={{ ...commonFormRules, validate: validatePhone }}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <FormInput
              label="Email"
              onChange={onChange}
              errorMessage={errors.email?.message}
              type="email"
              placeholder="Enter e-mail address"
              testId="PurchaseForm__EmailInput"
            />
          )}
          rules={{ ...commonFormRules, validate: validateEmail }}
        />

        <Controller
          control={control}
          name="dateOfBirth"
          render={({ field: { onChange } }) => (
            <FormInput
              label="Date of birth"
              onChange={onChange}
              errorMessage={errors.dateOfBirth?.message}
              type="date"
              max={currentDate}
              min={PAST_DATE_MIN_VALUE}
              testId="PurchaseForm__DateOfBirthInput"
            />
          )}
          rules={{ ...commonFormRules, validate: validateDateOfBirth }}
        />

        <Controller
          control={control}
          name="address"
          render={({ field: { onChange } }) => (
            <FormInput
              label="Address"
              onChange={onChange}
              errorMessage={errors.address?.message}
              placeholder="Enter address"
              testId="PurchaseForm__AddressInput"
            />
          )}
          rules={{ ...commonFormRules }}
        />

        <Controller
          control={control}
          name="city"
          render={({ field: { onChange } }) => (
            <FormInput
              label="City"
              onChange={onChange}
              errorMessage={errors.city?.message}
              placeholder="Enter city"
              testId="PurchaseForm__CityInput"
            />
          )}
          rules={{ ...commonFormRules }}
        />

        <FormGroup>
          <Controller
            control={control}
            name="state"
            render={({ field: { onChange } }) => (
              <FormInput
                label="State"
                onChange={onChange}
                errorMessage={errors.state?.message}
                placeholder="Enter state"
                testId="PurchaseForm__StateInput"
              />
            )}
            rules={{ ...commonFormRules }}
          />

          <Controller
            control={control}
            name="zipCode"
            render={({ field: { onChange } }) => (
              <FormInput
                label="ZIP Code"
                onChange={onChange}
                errorMessage={errors.zipCode?.message}
                placeholder="Enter ZIP Code"
                testId="PurchaseForm__ZipCodeInput"
              />
            )}
            rules={{ ...commonFormRules }}
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default PurchaseForm;
