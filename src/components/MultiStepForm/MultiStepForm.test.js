import userEvent from "@testing-library/user-event";
import { MultiStepForm } from "./MultiStepFrom";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { MemoryRouter } from "react-router";

const values = {
  location: "heaven",
  firstName: "john",
  lastName: "doe",
  license: "123456",
  expired: false,
  vehicle: "tesla",
};

describe.skip("component MultiStepFrom", () => {
  test("fill the form and sumbmit the values", async () => {
    // const fn = api.onSubmit;
    // api.onSubmit = jest.fn();
    render(
      <MemoryRouter initialEntries={["/vehicle"]}>
        <Provider store={store}>
          <MultiStepForm />
        </Provider>
      </MemoryRouter>
    );
    // screen.debug()
    userEvent.click(await screen.findByText(/next/i));

    await waitFor(() => {
      // expect(api.onSubmit).toHaveBeenCalled();
      // expect(api.onSubmit.mock.calls[0][0]).toEqual(values);
      // console.log(api.onSubmit.mock.calls[0][0])
    });
    // api.onSubmit = fn;
  });

  test("navigation forward", async () => {
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
    userEvent.click(screen.getByText(/next/i));

    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /Please enter your name/i
      );
    });
    userEvent.click(screen.getByText(/next/i));
    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /lease enter your license number/i
      );
    });

    userEvent.click(screen.getByText(/next/i));
    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /Please enter your vehicle/i
      );
    });
  });

  test("navigation backward", async () => {
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
