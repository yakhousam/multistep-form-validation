import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MultiStepForm } from "../MultiStepFrom";
import { onSubmit as mockedOnSubmit } from "../form-utils/onSubmit";

import userEvent from "@testing-library/user-event";

jest.mock("../form-utils/initialValues.js", () => ({
  initialValues: {
    location: "",
    firstName: "",
    lastName: "",
    license: "",
    expired: false,
    vehicle: "",
  },
}));

jest.mock("../form-utils/onSubmit.js", () => ({
  onSubmit: jest.fn(),
}));

const StepLocation = () => (
  <MemoryRouter initialEntries={["/"]}>
    <MultiStepForm />
  </MemoryRouter>
);

describe("component StepLocation", () => {
  test("render", () => {
    render(<StepLocation />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /start with your location/i
    );
    expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
  });

  test("submit data on click button next", async () => {
    render(<StepLocation />);
    const location = "my location";
    userEvent.type(screen.getByLabelText(/location/i), location);
    expect(screen.getByLabelText(/location/i).value).toBe(location);
    userEvent.click(screen.getByText(/next/i));
    await waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
    });
  });

  test("should not sumbit when location is empty", async () => {
    render(<StepLocation />);

    userEvent.click(screen.getByText(/next/i));
    await waitFor(() => {
      expect(mockedOnSubmit).not.toHaveBeenCalled();
    });
    expect(screen.getByText(/location is a required/i)).toBeInTheDocument();
  });
});
