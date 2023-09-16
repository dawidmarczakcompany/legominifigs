import { fireEvent, render } from "@testing-library/react";
import { describe, vi } from "vitest";
import DrawPage from "..";
import { minifigGenerator } from "mocks/minifig";
import { PAGE_ROUTE } from "utils/navigation";

const mockMinifigs = vi.fn();
const mockErrorFetchingMinifigs = vi.fn();
const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

vi.mock("hooks/useDrawMinifigs", () => ({
  default: () => ({
    minifigs: mockMinifigs(),
    errorFetchingMinifigs: mockErrorFetchingMinifigs(),
  }),
}));

describe("DrawPage", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("Should render draw page without errors if minifigs are provided", () => {
    mockMinifigs.mockReturnValue([minifigGenerator()]);

    const { getByTestId } = render(<DrawPage />);

    const drawPageComponent = getByTestId("DrawPage__Wrapper");

    expect(drawPageComponent).toBeInTheDocument();
  });

  test("Should render loader when fetching minifigs", () => {
    mockMinifigs.mockReturnValue(null);

    const { getByTestId } = render(<DrawPage />);

    const loaderComponent = getByTestId("DrawPage__Loader");

    expect(loaderComponent).toBeInTheDocument();
  });

  test("Should render errorPage when failed to fetch minifigs", () => {
    mockMinifigs.mockReturnValue(null);
    mockErrorFetchingMinifigs.mockReturnValue(true);

    const { getByTestId } = render(<DrawPage />);

    const errorPageComponent = getByTestId("DrawPage__ErrorPage");

    expect(errorPageComponent).toBeInTheDocument();
  });

  test("Should disable proceed button until user select minifig", async () => {
    mockMinifigs.mockReturnValue([minifigGenerator()]);

    const { getByTestId } = render(<DrawPage />);

    const buttonComponent = getByTestId("DrawPage__ProceedButton");
    expect(buttonComponent).toBeDisabled();

    fireEvent.click(buttonComponent);

    expect(mockNavigate).not.toBeCalled();
  });

  test("Should navigate to purchase page after selecting minifig and clicking on the button", async () => {
    const mockedSetNum = "mockedSetNum";
    mockMinifigs.mockReturnValue([minifigGenerator({ set_num: mockedSetNum })]);

    const { getByTestId } = render(<DrawPage />);

    const buttonComponent = getByTestId("DrawPage__ProceedButton");
    const minifigItemComponent = getByTestId(
      `DrawPage__MinifigItem__${mockedSetNum}`,
    );

    expect(minifigItemComponent).toBeInTheDocument();
    expect(buttonComponent).toBeInTheDocument();

    fireEvent.click(minifigItemComponent);
    fireEvent.click(buttonComponent);

    expect(mockNavigate).toBeCalledWith(
      `/${PAGE_ROUTE.MINIFIG_PURCHASE}/${mockedSetNum}`,
    );
  });
});
