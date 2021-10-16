import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MultiStepForm } from "../MultiStepFrom";
import { onSubmit as mockedOnSubmit } from "../form-utils/onSubmit";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

jest.mock("../form-utils/initialValues.js", () => ({
  initialValues: {
    location: "here",
    firstName: "my first name",
    lastName: "my last name",
    license: "my license",
    expired: false,
    vehicle: "",
  },
}));

jest.mock("../form-utils/onSubmit.js", () => ({
  onSubmit: jest.fn(),
}));

const StepVehicle = () => (
  <MemoryRouter initialEntries={["/vehicle"]}>
    <Provider store={store}>
      <MultiStepForm />
    </Provider>
  </MemoryRouter>
);

describe("component StepVehicle", () => {
  test("render", () => {
    render(<StepVehicle />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Please enter your vehicle/i
    );
    expect(screen.getByLabelText(/vehicle/i)).toBeInTheDocument();
  });

  test("submit data on click button next", async () => {
    render(<StepVehicle />);
    const vehicle = "my vehicle";
    userEvent.type(screen.getByLabelText(/vehicle/i), vehicle);
    expect(screen.getByLabelText(/vehicle/i).value).toBe(vehicle);
    userEvent.click(screen.getByText(/next/i));
    await waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
    });
  });

  test("should not sumbit when vehicle is empty", async () => {
    render(<StepVehicle />);

    userEvent.click(screen.getByText(/next/i));
    await waitFor(() => {
      expect(mockedOnSubmit).not.toHaveBeenCalled();
    });
    expect(screen.getByText(/vehicle is a required/i)).toBeInTheDocument();
  });
});
