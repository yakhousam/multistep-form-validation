import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Stepper, steps } from "./Stepper";

const wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

describe("component Stepper", () => {
  test("render a list of steps", () => {
    render(<Stepper />, { wrapper });
    steps.forEach((step, idx) => {
      const { title, url } = step;
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getAllByRole("link")[idx]).toHaveAttribute("href", url);
    });
  });
});
