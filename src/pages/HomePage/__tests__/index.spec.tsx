import { fireEvent, render } from "@testing-library/react";
import HomePage from "..";
import { PAGE_ROUTE } from "utils/navigation";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("HomePage", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Should render home page without errors", () => {
    const { getByTestId } = render(<HomePage />);

    const homePageComponent = getByTestId("HomePage__Wrapper");

    expect(homePageComponent).toBeInTheDocument();
  });

  it("Should navigate to draw page after clicking on start button", () => {
    const { getByTestId } = render(<HomePage />);

    const startButton = getByTestId("HomePage__StartButton");
    expect(startButton).toBeInTheDocument();

    fireEvent.click(startButton);

    expect(mockNavigate).toBeCalledWith(`/${PAGE_ROUTE.MINIFIG_SELECTION}`);
  });
});
