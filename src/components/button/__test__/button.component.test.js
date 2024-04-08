import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("Button tests", () => {
  test("Should render Base Button when nothing is passed", () => {
    // render(<Button />);
    // const buttonElement = screen.getByRole('button');
    render(<Button>Test</Button>);
    const buttonElement = screen.getByText(/test/i);

    expect(buttonElement).toHaveStyle("background-color: black");
  });

  test("Should render Google button when passed Google Button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);
    const googleButtonElement = screen.getByRole("button");
    expect(googleButtonElement).toHaveStyle("background-color: #4285f4");
  });

  test("Should render Inverted button when passed Inverted Button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);
    const invertedButtonElement = screen.getByRole("button");
    expect(invertedButtonElement).toHaveStyle("background-color: white");
  });

  test("Button should be disable if isLoading is true", () => {
    render(<Button isLoading={true} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
});
