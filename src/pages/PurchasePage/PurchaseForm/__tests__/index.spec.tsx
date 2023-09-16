import { fireEvent, render, waitFor } from "@testing-library/react";
import PurchaseForm from "..";
import { PurchaseFormValidationMessages } from "utils/validators";
import { PurchaseFormType } from "types/purchase";
import { FormProvider, useForm } from "react-hook-form";

const MockedPurchaseForm = () => {
  const formMethods = useForm<PurchaseFormType>({
    mode: "onChange",
  });

  return (
    <FormProvider {...formMethods}>
      <PurchaseForm />
    </FormProvider>
  );
};

describe("PurchaseForm", () => {
  test("Should render the from with all fields", () => {
    const { getByText } = render(<MockedPurchaseForm />);

    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Surname")).toBeInTheDocument();
    expect(getByText("Phone number")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Date of birth")).toBeInTheDocument();
    expect(getByText("Address")).toBeInTheDocument();
    expect(getByText("City")).toBeInTheDocument();
    expect(getByText("State")).toBeInTheDocument();
    expect(getByText("ZIP Code")).toBeInTheDocument();
  });

  test("Should display validation error for email", async () => {
    const { getByTestId, getByText } = render(<MockedPurchaseForm />);

    const emailInput = getByTestId("PurchaseForm__EmailInput");
    expect(emailInput).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: "incorrect-email" } });
    expect(emailInput).toHaveValue("incorrect-email");

    await waitFor(() => {
      expect(
        getByText(PurchaseFormValidationMessages.WRONG_EMAIL),
      ).toBeInTheDocument();
    });
  });

  test("Should display validation error for phone number", async () => {
    const { getByTestId, getByText } = render(<MockedPurchaseForm />);

    const phoneInput = getByTestId("PurchaseForm__PhoneInput");
    expect(phoneInput).toBeInTheDocument();

    fireEvent.change(phoneInput, { target: { value: "123" } });
    expect(phoneInput).toHaveValue("123");

    await waitFor(() => {
      expect(
        getByText(PurchaseFormValidationMessages.WRONG_PHONE),
      ).toBeInTheDocument();
    });
  });

  test("Should display validation error for date of birth", async () => {
    const { getByTestId, getByText } = render(<MockedPurchaseForm />);

    const dateInput = getByTestId("PurchaseForm__DateOfBirthInput");
    expect(dateInput).toBeInTheDocument();

    fireEvent.change(dateInput, { target: { value: "2050-09-01" } });
    expect(dateInput).toHaveValue("2050-09-01");

    await waitFor(() => {
      expect(
        getByText(PurchaseFormValidationMessages.WRONG_DATE),
      ).toBeInTheDocument();
    });
  });
});
