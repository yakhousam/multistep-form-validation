import { MemoryRouter } from "react-router-dom";
import { Stepper } from "./Stepper";

export default {
  title: "components/Stepper",
  component: Stepper,
};

export const stepLocation = () => (
  <MemoryRouter initialEntries={["/"]}>
    <Stepper />
  </MemoryRouter>
);

export const stepDriver = () => (
  <MemoryRouter initialEntries={["/driver"]}>
    <Stepper />
  </MemoryRouter>
);

export const stepVehicle = () => (
  <MemoryRouter initialEntries={["/vehicle"]}>
    <Stepper />
  </MemoryRouter>
);
