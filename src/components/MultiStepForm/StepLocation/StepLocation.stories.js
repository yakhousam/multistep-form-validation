import { StepLocation } from "./StepLocation";
import { Formik } from "formik";

export default {
  title: "Component/StepLocation",
  component: StepLocation,
};

const Template = (args) => (
  <Formik initialValues={{ location: "" }}>
    <StepLocation {...args} />
  </Formik>
);

export const Location = Template.bind({});

Location.args = {
  errors: { location: "Required" },
};
