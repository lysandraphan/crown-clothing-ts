import { screen, fireEvent } from "@testing-library/react";
import * as reactRedux from "react-redux";

import Navigation from "../navigation.component";
import { renderWithProviders } from "../../../utils/test/test.utils";
import { signOutStart } from "../../../store/user/user.action";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Navigation Test", () => {
  test("Should render Sign In link & not Sign Out link if there is no current user", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });
    const signInLinkElement = screen.getByText(/Sign in/i);
    expect(signInLinkElement).toBeInTheDocument();

    const signOutLinkElement = screen.queryByText(/Sign out/i);
    expect(signOutLinkElement).toBeNull();
  });

  test("Should render Sign Out link & not Sign In link if there is a current user", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });
    const signOutLinkElement = screen.getByText(/Sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    const signInLinkElement = screen.queryByText(/Sign in/i);
    expect(signInLinkElement).toBeNull();
  });

  test("Should not render a CartDropDown if isCartOpen is false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    const dropDownTextElement = screen.queryByText(/Your cart is empty/i);
    expect(dropDownTextElement).toBeNull();
  });

  test("Should render a CartDropDown if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const dropDownTextElement = screen.getByText(/Your cart is empty/i);
    expect(dropDownTextElement).toBeInTheDocument();
  });

  test("Should dispatch signOutStart action when clicking on the SignOut link", async () => {
    // const mockDispatch = jest.fn();
    // jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signOutLinkElement = screen.getByText(/Sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    await fireEvent.click(signOutLinkElement);
    expect(mockDispatch).toHaveBeenCalled();

    const signOutAction = signOutStart();
    expect(mockDispatch).toHaveBeenCalledWith(signOutAction);

    mockDispatch.mockClear();
  });
});
