import { StepLocation } from "./StepLocation";
import withFormik from "storybook-formik";
import { stepLocationSchema } from "../form-validation";

export default {
  title: "Components/StepLocation",
  // component: StepLocation,
};

export const Location = () => <StepLocation />;

const locationParameters = {
  formik: {
    initialValues: { location: "" },
    validationSchema: stepLocationSchema,
  },
};

Location.story = {
  decorators: [withFormik],
  parameters: locationParameters,
};
