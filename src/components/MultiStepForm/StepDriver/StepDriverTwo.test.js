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
    license: "",
    expired: false,
    vehicle: "",
  },
}));

jest.mock("../form-utils/onSubmit.js", () => ({
  onSubmit: jest.fn(),
}));

const StepDriverTwo = () => (
  <MemoryRouter initialEntries={["/driver/2"]}>
    <Provider store={store}>
      <MultiStepForm />
    </Provider>
  </MemoryRouter>
);

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
