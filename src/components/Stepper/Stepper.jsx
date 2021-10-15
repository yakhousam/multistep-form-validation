import styles from "./Stepper.module.css";
import { Step } from "./Step";
import { FaMapMarkerAlt, FaAddressCard, FaCar } from "react-icons/fa";

export const steps = [
  { id: 1, title: "Your Location", icon: <FaMapMarkerAlt />, url: "/" },
  {
    id: 2,
    title: "Your informations",
    icon: <FaAddressCard />,
    url: "/driver",
  },
  { id: 3, title: "Your vehicle", icon: <FaCar />, url: "/vehicle" },
];

export function Stepper() {
  return (
    <div className={styles.container}>
      {steps.map(({ id, ...step }) => (
        <Step key={id} {...step} />
      ))}
    </div>
  );
}
