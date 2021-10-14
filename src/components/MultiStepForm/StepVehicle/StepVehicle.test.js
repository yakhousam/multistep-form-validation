import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { StepVehicle } from "./StepVehicle";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import { stepVehicleSchema } from "../form-validation";

const handleSubmit = jest.fn();

const wrapper = ({ children }) => (
  <Formik
    initialValues={{ vehicle: "" }}
    validationSchema={stepVehicleSchema}
    onSubmit={handleSubmit}
  >
    <MemoryRouter initialEntries={["/vehicle"]}>
      <Form>{children}</Form>
    </MemoryRouter>
  </Formik>
);

describe("component StepVehicle", () => {
  test("it render", async () => {
    render(<StepVehicle />, { wrapper });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /vehicle/i
    );
    expect(screen.getByLabelText(/vehicle/i)).toBeInTheDocument();
  });

  test("input vehicle is required", async () => {
    render(<StepVehicle />, { wrapper });

    userEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(await screen.findByText(/required/i)).toBeInTheDocument();
  });

  //   test("it submit", async () => {
  //     render(
  //       <Formik
  //         initialValues={{ vehicle: "" }}
  //         validationSchema={stepVehicleSchema}
  //         onSubmit={handleSubmit}
  //       >
  //         <MemoryRouter initialEntries={["/vehicle"]}>
  //           <Form>
  //             <StepVehicle />
  //           </Form>
  //         </MemoryRouter>
  //       </Formik>
  //     );
  //     const input = screen.getByLabelText(/vehicle/i);

  //     userEvent.type(input, "tesla");
  //     expect(input.value).toBe("tesla");

  //     // userEvent.click(screen.getByRole("button", { name: /next/i }));
  //     // await waitFor(() => {
  //     //   expect(handleSubmit).toHaveBeenCalled();
  //     // });
  //   });
});
