import userEvent from "@testing-library/user-event";
import { MultiStepForm } from "./MultiStepFrom";
import { render, screen, waitFor } from "@testing-library/react";
import { store } from "../../redux/store";
import { reducer } from "../../redux/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { postMultiStepsForm as mockedPostMultiStepsForm } from "../../redux/api";

jest.mock("../../redux/api.js");

describe("component MultiStepFrom", () => {
  test("navigation forward and submit the form", async () => {
    const testData = {
      location: "heaven",
      firstName: "samir",
      lastName: "yaya",
      license: "123456789",
      expired: false,
      vehicle: "tesla",
    };
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <MultiStepForm />
        </Provider>
      </MemoryRouter>
    );

    expect(await screen.findByRole("heading", { level: 1 })).toHaveTextContent(
      /start with your location/i
    );
    userEvent.type(screen.getByLabelText(/location/i), testData.location);
    userEvent.click(screen.getByRole("button", { name: /next/i }));

    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /Please enter your name/i
      );
    });
    userEvent.type(screen.getByLabelText(/first name/i), testData.firstName);
    userEvent.type(screen.getByLabelText(/last name/i), testData.lastName);
    userEvent.click(screen.getByRole("button", { name: /next/i }));

    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /please enter your license number/i
      );
    });
    userEvent.type(screen.getByLabelText(/license/i), testData.license);
    userEvent.click(screen.getByRole("button", { name: /next/i }));

    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /Please enter your vehicle/i
      );
    });
    userEvent.type(screen.getByLabelText(/vehicle/i), testData.vehicle);
    userEvent.click(screen.getByRole("button", { name: /next/i }));

    await waitFor(() => {
      expect(mockedPostMultiStepsForm).toHaveBeenCalledWith(testData);
    });
  });

  test("navigation backward", async () => {
    const values = {
      location: "here",
      firstName: "john",
      lastName: "doe",
      license: "123456",
      expired: false,
      vehicle: "vw",
    };
    const store = createStore(reducer, values);
    render(
      <MemoryRouter initialEntries={["/vehicle"]}>
        <Provider store={store}>
          <MultiStepForm />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Please enter your vehicle/i
    );

    userEvent.click(screen.getByText(/back/i));
    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /lease enter your license number/i
      );
    });
    userEvent.click(screen.getByText(/back/i));

    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /Please enter your name/i
      );
    });

    userEvent.click(screen.getByText(/back/i));

    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /start with your location/i
      );
    });
  });
});
