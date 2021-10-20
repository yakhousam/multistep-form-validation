import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MultiStepForm } from "../MultiStepFrom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "../../../redux/reducer";

import userEvent from "@testing-library/user-event";

const initialValues = {
  location: "",
  firstName: "",
  lastName: "",
  license: "",
  expired: false,
  vehicle: "",
};

const mockedOnSubmit = jest.fn();

jest.mock("../../../hooks/useOnSubmit.js", () => ({
  useOnSubmit: () => ({ onSubmit: mockedOnSubmit }),
}));

const StepLocation = () => {
  const store = createStore(reducer, initialValues);
  return (
    <MemoryRouter initialEntries={["/"]}>
      <Provider store={store}>
        <MultiStepForm />
      </Provider>
    </MemoryRouter>
  );
};

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
    expect(mockedOnSubmit.mock.calls[0][0]).toEqual({
      ...initialValues,
      location,
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
