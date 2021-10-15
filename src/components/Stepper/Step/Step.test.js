import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Step } from "./Step";
import { FaCar } from "react-icons/fa";

const wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

describe("component Step", () => {
  test("it render", () => {
    const title = "your name";
    const url = "/vehicle";
    render(<Step url={url} title={title} icon={<FaCar />} />, {
      wrapper,
    });
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", url);
  });
});
