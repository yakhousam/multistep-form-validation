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
  license: "",
  expired: false,
  vehicle: "",
};

const mockedOnSubmit = jest.fn();

jest.mock("../../../hooks/useOnSubmit.js", () => ({
  useOnSubmit: () => ({ onSubmit: mockedOnSubmit }),
}));

const StepDriverTwo = () => {
  const store = createStore(reducer, initialValues);
  return (
    <MemoryRouter initialEntries={["/driver/2"]}>
      <Provider store={store}>
        <MultiStepForm />
      </Provider>
    </MemoryRouter>
  );
};

describe("component StepDriverTwo", () => {
  test("render", () => {
    render(<StepDriverTwo />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /lease enter your license number/i
    );
    expect(screen.getByLabelText(/license/i)).toBeInTheDocument();
  });

  test("submit data on click button next", async () => {
    render(<StepDriverTwo />);
    const license = "my license";
    userEvent.type(screen.getByLabelText(/license/i), license);
    userEvent.click(screen.getByText(/next/i));
    await waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
    });
    expect(mockedOnSubmit.mock.calls[0][0]).toEqual({
      ...initialValues,
      license,
    });
  });

  test("should not sumbit when license is empty", async () => {
    render(<StepDriverTwo />);

    userEvent.click(screen.getByText(/next/i));
    await waitFor(() => {
      expect(mockedOnSubmit).not.toHaveBeenCalled();
    });
    expect(screen.getByText(/license is a required/i)).toBeInTheDocument();
  });
});
