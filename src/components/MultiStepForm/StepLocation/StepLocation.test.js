import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MultiStepForm } from "../MultiStepFrom";
import userEvent from "@testing-library/user-event";

const StepLocation = () => (
  <MemoryRouter initialEntries={["/"]}>
    <MultiStepForm />
  </MemoryRouter>
);

describe("component StepLocation", () => {
  test("it render", async () => {
    render(<StepLocation />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /location/i
    );
    expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
  });

  test("input location is required", async () => {
    render(<StepLocation />);

    const button = screen.getByRole("button", { name: /next/i });

    userEvent.click(button);
    expect(await screen.findByText(/required/i)).toBeInTheDocument();
  });
});
