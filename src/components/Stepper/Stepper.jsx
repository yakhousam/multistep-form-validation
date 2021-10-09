import { Step } from "./Step";
import styles from "./Stepper.module.css";

import { FaMapMarkerAlt, FaAddressCard, FaCar } from "react-icons/fa";

const steps = [
  { id: 1, title: "Your Location", icon: <FaMapMarkerAlt />, active: true },
  { id: 2, title: "Your informations", icon: <FaAddressCard /> },
  { id: 3, title: "Your vehicle", icon: <FaCar /> },
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
