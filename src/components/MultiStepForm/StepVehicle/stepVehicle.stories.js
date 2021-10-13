import withFormik from "storybook-formik";
import { MemoryRouter } from "react-router-dom";
import { StepVehicle } from "./StepVehicle";
import { stepVehicleSchema } from "../form-validation";

export default {
  title: "components/StepVehicle",
};

export const stepVehicle = () => (
  <MemoryRouter>
    <StepVehicle />
  </MemoryRouter>
);

const stepVehicleParameters = {
  formik: {
    initialValues: { vehicle: "" },
    validationSchema: stepVehicleSchema,
  },
};

stepVehicle.story = {
  decorators: [withFormik],
  parameters: stepVehicleParameters,
};
