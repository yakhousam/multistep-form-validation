import userEvent from "@testing-library/user-event";
import { MultiStepForm } from "./MultiStepFrom";
import { render, screen, waitFor } from "@testing-library/react";
import { createStore } from "redux";
import { reducer } from "../../redux/reducer";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import * as hooks from "../../hooks/useOnSubmit";

const values = {
  location: "heaven",
  firstName: "john",
  lastName: "doe",
  license: "123456",
  expired: false,
  vehicle: "tesla",
};

function Wrapper({ route, children }) {
  const store = createStore(reducer, values);
  return (
    <MemoryRouter initialEntries={[`${route}`]}>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
}

describe("component MultiStepFrom", () => {
  test("should submit the form", async () => {
    const mockedOnSubmit = jest.fn();
    const useOnSubmit = hooks.useOnSubmit;
    hooks.useOnSubmit = () => ({ onSubmit: mockedOnSubmit });
    render(
      <Wrapper route="/vehicle">
        <MultiStepForm />
      </Wrapper>
    );
    userEvent.click(await screen.findByText(/next/i));

    await waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
      expect(mockedOnSubmit.mock.calls[0][0]).toEqual(values);
    });
    hooks.useOnSubmit = useOnSubmit;
  });

  test("navigation forward", async () => {
    render(
      <Wrapper route="/">
        <MultiStepForm />
      </Wrapper>
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
      <Wrapper route="/vehicle">
        <MultiStepForm />
      </Wrapper>
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
