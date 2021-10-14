import { MemoryRouter } from "react-router";
import { Navigation } from "./Navigation";
import { render, screen } from "@testing-library/react";

const NavWithRoute = ({ url }) => (
  <MemoryRouter>
    <Navigation backUrl={url} />
  </MemoryRouter>
);

describe("component Navigation", () => {
  test("should show only button next when backUrl not passed", () => {
    render(<NavWithRoute />);
    expect(screen.queryByText(/back/i)).toBeNull();
    expect(screen.queryByRole("link")).toBeNull();
    expect(screen.getAllByRole("button")).toHaveLength(1);
    expect(screen.getByRole("button")).toHaveTextContent(/next/i);
  });
  test("should show button next and back when backUrl is passed to component )", () => {
    render(<NavWithRoute url={"/"} />);
    expect(screen.getByRole("link")).toHaveTextContent(/back/i);
  });
});
