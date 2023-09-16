import { fireEvent, render, waitFor } from "@testing-library/react";
import PurchasePage from "..";
import { minifigGenerator } from "mocks/minifig";
import * as purchaseActions from "actions/purchase";

const mockNavigate = vi.fn();
const mockMinifig = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  useParams: () => ({
    id: "id",
  }),
}));

vi.mock("hooks/useMinifigDetails", () => ({
  default: () => ({
    minifig: mockMinifig(),
  }),
}));

describe("PurchasePage", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("Should display form and summary for selected minifig", () => {
    mockMinifig.mockReturnValue([minifigGenerator()]);

    const { getByTestId } = render(<PurchasePage />);

    const purchaseFormComponent = getByTestId("PurchaseForm__Wrapper");
    expect(purchaseFormComponent).toBeInTheDocument();

    const purchaseSummaryComponent = getByTestId("PurchaseSummary__Wrapper");
    expect(purchaseSummaryComponent).toBeInTheDocument();
  });

  test("Should disable submit button if form is not filled", () => {
    mockMinifig.mockReturnValue([minifigGenerator()]);

    const { getByTestId } = render(<PurchasePage />);

    const submitButton = getByTestId("PurchaseSummary__SubmitButton");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test("Should display submit button if form is filled correctly", async () => {
    const spyOnSubmit = vi.spyOn(purchaseActions, "submitPurchase");

    mockMinifig.mockReturnValue([minifigGenerator()]);
    const { getByTestId } = render(<PurchasePage />);

    //Fill the form
    const textInputIds = [
      "PurchaseForm__NameInput",
      "PurchaseForm__SurnameInput",
      "PurchaseForm__AddressInput",
      "PurchaseForm__CityInput",
      "PurchaseForm__StateInput",
      "PurchaseForm__ZipCodeInput",
    ];

    textInputIds.forEach((testId) => {
      const input = getByTestId(testId);
      expect(input).toBeInTheDocument();
      fireEvent.change(input, { target: { value: "mockedInputValue" } });
      expect(input).toHaveValue("mockedInputValue");
    });

    const emailInput = getByTestId("PurchaseForm__EmailInput");
    expect(emailInput).toBeInTheDocument();
    fireEvent.change(emailInput, { target: { value: "correct@email.com" } });

    const phoneNumberInput = getByTestId("PurchaseForm__PhoneInput");
    expect(phoneNumberInput).toBeInTheDocument();
    fireEvent.change(phoneNumberInput, { target: { value: "123456789" } });

    const dateInput = getByTestId("PurchaseForm__DateOfBirthInput");
    expect(dateInput).toBeInTheDocument();
    fireEvent.change(dateInput, { target: { value: "1998-11-29" } });

    const submitButton = getByTestId("PurchaseSummary__SubmitButton");

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(spyOnSubmit).toBeCalledTimes(1);
    });
  });
});
