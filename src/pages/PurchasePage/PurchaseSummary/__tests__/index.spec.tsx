import { minifigGenerator } from "mocks/minifig";
import PurchaseSummary from "..";
import { fireEvent, render } from "@testing-library/react";

const mockMinifig = vi.fn();
const mockMinifigParts = vi.fn();
const errorFetchingMinifig = vi.fn();
const errorFetchingMinifigParts = vi.fn();
const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

vi.mock("hooks/useMinifigDetails", () => ({
  default: () => ({
    minifig: mockMinifig(),
    minifigParts: mockMinifigParts(),
    errorFetchingMinifig: errorFetchingMinifig(),
    errorFetchingMinifigParts: errorFetchingMinifigParts(),
  }),
}));

vi.mock("react-hook-form", () => ({
  ...vi.importActual("react-hook-form"),
  useFormContext: () => ({
    formState: {},
  }),
}));

describe("PurchaseSummary", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("Should render summary without errors if minifig details are provided", () => {
    mockMinifig.mockReturnValue([minifigGenerator()]);

    const { getByTestId } = render(<PurchaseSummary />);

    const summaryComponent = getByTestId("PurchaseSummary__Wrapper");
    expect(summaryComponent).toBeInTheDocument();
  });

  test("Should render loader when fetching minifig details", () => {
    mockMinifig.mockReturnValue(null);

    const { getByTestId } = render(<PurchaseSummary />);

    const loaderComponent = getByTestId("PurchaseSummary__Loader");

    expect(loaderComponent).toBeInTheDocument();
  });

  test("Should render error message and go home button when failed to fetch minifig details", () => {
    mockMinifig.mockReturnValue(null);
    errorFetchingMinifig.mockReturnValue(true);

    const { getByTestId } = render(<PurchaseSummary />);

    const errorMessageComponent = getByTestId("PurchaseSummary__ErrorMessage");
    expect(errorMessageComponent).toBeInTheDocument();

    const goHomeComponent = getByTestId("PurchaseSummary__GoHomeButton");
    expect(goHomeComponent).toBeInTheDocument();

    fireEvent.click(goHomeComponent);

    expect(mockNavigate).toBeCalledWith(`/`, { replace: true });
  });

  test("Should display info message and disable submit button until filling shipping form", () => {
    mockMinifig.mockReturnValue([minifigGenerator()]);

    const { getByTestId } = render(<PurchaseSummary />);

    const infoMessage = getByTestId("PurchaseSummary__InfoMessage");
    expect(infoMessage).toBeInTheDocument();

    const submitButton = getByTestId("PurchaseSummary__SubmitButton");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test("Should display summary even if minifig parts failed to fetch", () => {
    mockMinifig.mockReturnValue([minifigGenerator()]);

    errorFetchingMinifigParts.mockReturnValue(true);

    const { getByTestId } = render(<PurchaseSummary />);
    const summaryComponent = getByTestId("PurchaseSummary__Wrapper");
    expect(summaryComponent).toBeInTheDocument();
  });
});
