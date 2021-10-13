import { MemoryRouter } from "react-router";
import { Step } from "./Step";
import { FaMapMarkerAlt } from "react-icons/fa";

export default {
  title: "components/Step",
  component: Step,
};

const Template = (args) => (
  <MemoryRouter>
    <Step {...args} />
  </MemoryRouter>
);

export const stepNotActive = Template.bind({});
stepNotActive.args = {
  url: "",
  title: "Your location",
  icon: <FaMapMarkerAlt />,
};

export const stepActive = Template.bind({});
stepActive.args = {
  url: "/",
  title: "Your location",
  icon: <FaMapMarkerAlt />,
};
