import withFormik from "storybook-formik";
import { MemoryRouter } from "react-router-dom";
import { StepDriverOne } from "./StepDriver";
import { stepDriverOneSchema } from "../form-validation";

export default {
  title: "Components/StepDriverOne",
};

export const driverOne = () => (
  <MemoryRouter>
    <StepDriverOne />
  </MemoryRouter>
);

const driverOneParameters = {
  formik: {
    initialValues: { firstName: "", lastName: "" },
    validationSchema: stepDriverOneSchema,
  },
};

driverOne.story = {
  decorators: [withFormik],
  parameters: driverOneParameters,
};
