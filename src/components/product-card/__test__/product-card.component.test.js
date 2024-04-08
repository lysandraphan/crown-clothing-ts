import { fireEvent, screen } from "@testing-library/react";

import ProductCard from "../product-card.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

describe("Product Card tests", () => {
  test("It should add the product item when Product Card button is clicked", async () => {
    const mockProduct = {
      id: "1",
      imageUrl: "test",
      name: "Item A",
      price: 10,
    };

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButtonEl = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonEl);
    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
