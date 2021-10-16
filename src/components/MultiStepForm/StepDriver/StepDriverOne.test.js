import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MultiStepForm } from "../MultiStepFrom";
import { onSubmit as mockedOnSubmit } from "../form-utils/onSubmit";

import userEvent from "@testing-library/user-event";

jest.mock("../form-utils/initialValues.js", () => ({
  initialValues: {
    location: "here",
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

const StepDriverOne = () => (
  <MemoryRouter initialEntries={["/driver/1"]}>
    <MultiStepForm />
  </MemoryRouter>
);

describe.skip("component StepDriverOne", () => {
  test("render", () => {
    render(<StepDriverOne />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Please enter your name/i
    );
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
  });

  test("submit data on click button next", async () => {
    render(<StepDriverOne />);
    const firstName = "my first name";
    const lastName = "my last name";
    userEvent.type(screen.getByLabelText(/first name/i), firstName);
    userEvent.type(screen.getByLabelText(/last name/i), lastName);
    userEvent.click(screen.getByText(/next/i));
    await waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
    });
  });

  test("should not sumbit when firsName is empty", async () => {
    render(<StepDriverOne />);
    userEvent.type(screen.getByLabelText(/last name/i), "lastName");
    userEvent.click(screen.getByText(/next/i));
    await waitFor(() => {
      expect(mockedOnSubmit).not.toHaveBeenCalled();
    });
    expect(screen.getByText(/firstName is a required/i)).toBeInTheDocument();
  });

  test("should not sumbit when lastName is empty", async () => {
    render(<StepDriverOne />);
    userEvent.type(screen.getByLabelText(/first name/i), "first name");
    userEvent.click(screen.getByText(/next/i));
    await waitFor(() => {
      expect(mockedOnSubmit).not.toHaveBeenCalled();
    });
    expect(screen.getByText(/lastName is a required/i)).toBeInTheDocument();
  });

  test("should not sumbit when both firsName and lastName are empty", async () => {
    render(<StepDriverOne />);
    userEvent.click(screen.getByText(/next/i));
    await waitFor(() => {
      expect(mockedOnSubmit).not.toHaveBeenCalled();
    });
    expect(screen.getByText(/firstName is a required/i)).toBeInTheDocument();
    expect(screen.getByText(/lastName is a required/i)).toBeInTheDocument();
  });
});
