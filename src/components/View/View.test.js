import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { View } from "./View";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { reducer } from "../../redux/reducer";

describe("component/View", () => {
  test("cannot go to driver step or to vehicle step if step location is not completed", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <View />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByText(/Let's start with your location/i)
    ).toBeInTheDocument();

    userEvent.click(screen.getByLabelText(/Your informations/i));
    await waitFor(() => {
      expect(
        screen.getByText(/Let's start with your location/i)
      ).toBeInTheDocument();
    });

    userEvent.click(screen.getByLabelText(/your vehicle/i));
    await waitFor(() => {
      expect(
        screen.getByText(/Let's start with your location/i)
      ).toBeInTheDocument();
    });
  });

  test("cannot go to vehicle step if step driver is not completed", async () => {
    const initialValues = {
      location: "here",
      firstName: "",
      lastName: "",
      license: "",
      expired: false,
      vehicle: "",
    };
    const store = createStore(reducer, initialValues);
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/vehicle"]}>
          <View />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Please enter your name/i)).toBeInTheDocument();

    userEvent.click(screen.getByLabelText(/your vehicle/i));
    await waitFor(() => {
      expect(screen.getByText(/Please enter your name/i)).toBeInTheDocument();
    });
  });
});
