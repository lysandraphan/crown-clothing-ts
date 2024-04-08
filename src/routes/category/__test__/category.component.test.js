import { screen } from "@testing-library/react";

import Category from "../category.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "women",
  }),
}));

describe("Category tests", () => {
  test("Should render a Spinner if isLoading is true", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });

    const spinnerEl = screen.getByTestId("spinner");
    expect(spinnerEl).toBeInTheDocument();
  });

  test("Should render a product if isLoading is false & there are category items", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: "women",
              items: [
                { id: 1, name: "Product 1" },
                { id: 2, name: "Product 2" },
              ],
            },
          ],
        },
      },
    });

    const spinnerEl = screen.queryByTestId("spinner");
    expect(spinnerEl).toBeNull();

    const product1El = screen.getByText(/product 1/i);
    expect(product1El).toBeInTheDocument();
  });
});
