import { MemoryRouter } from "react-router-dom";
import { Navigation } from "./Navigation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Navigation",
  component: Navigation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <MemoryRouter>
    <Navigation {...args} />
  </MemoryRouter>
);

export const NavigationNext = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavigationNext.args = {
  backUrl: "",
};

export const NavigationNextAndBack = Template.bind({});
NavigationNextAndBack.args = {
  backUrl: "/",
};
