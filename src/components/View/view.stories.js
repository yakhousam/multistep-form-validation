import { MemoryRouter } from "react-router-dom";
import { View } from "./View";

export default {
  title: "components/Multisteps-view",
  component: View,
};

export const view = () => (
  <MemoryRouter>
    <View />
  </MemoryRouter>
);
