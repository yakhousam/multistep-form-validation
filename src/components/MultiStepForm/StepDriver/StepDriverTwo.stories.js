import withFormik from "storybook-formik";
import { MemoryRouter } from "react-router-dom";
import { StepDriverTwo } from "./StepDriver";
import { stepDriverTwoSchema } from "../form-validation";

export default {
  title: "components/StepDriverTwo",
};

export const stepDriverTwo = () => (
  <MemoryRouter>
    <StepDriverTwo />
  </MemoryRouter>
);

const stepDriverTwoParmaters = {
  formik: {
    initialValues: { license: "", expired: false },
    validationSchema: stepDriverTwoSchema,
  },
};

stepDriverTwo.story = {
  decorators: [withFormik],
  parameters: stepDriverTwoParmaters,
};
