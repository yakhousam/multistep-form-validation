import { MemoryRouter } from "react-router";
import { MultiStepForm } from "./MultiStepFrom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe.skip("component MultiStepFrom", () => {
  test("render", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MultiStepForm />
      </MemoryRouter>
    );
    const button = screen.getByText(/next/i);
    userEvent.click(button);
    screen.debug();
  });
});
