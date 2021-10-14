import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("component Header", () => {
  test("has h1 element", () => {
    render(<Header />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /multi-step form/i
    );
  });
});
