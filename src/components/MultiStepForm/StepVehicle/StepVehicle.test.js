import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MultiStepForm } from "../MultiStepFrom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "../../../redux/reducer";

const initialValues = {
  location: "here",
  firstName: "jhon",
  lastName: "doe",
  license: "4267886",
  expired: false,
  vehicle: "",
};

const mockedOnSubmit = jest.fn();

jest.mock("../../../hooks/useOnSubmit.js", () => ({
  useOnSubmit: () => ({ onSubmit: mockedOnSubmit }),
}));

const StepVehicle = () => {
  const store = createStore(reducer, initialValues);
  return (
    <MemoryRouter initialEntries={["/vehicle"]}>
      <Provider store={store}>
        <MultiStepForm />
      </Provider>
    </MemoryRouter>
  );
};

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
    expect(mockedOnSubmit.mock.calls[0][0]).toEqual({
      ...initialValues,
      vehicle,
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
