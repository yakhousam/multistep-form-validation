import { MemoryRouter } from "react-router";
import { MultiStepForm } from "./MultiStepFrom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe.skip("component MultiStepFrom", () => {
  test("render", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <MultiStepForm />
        </Provider>
      </MemoryRouter>
    );
    const button = screen.getByText(/next/i);
    userEvent.click(button);
    // screen.debug();
  });
});
