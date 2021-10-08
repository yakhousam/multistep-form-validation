import { Step } from "./Step";
import styles from "./Stepper.module.css";

export function Stepper() {
  return (
    <div className={styles.container}>
      <Step active />
      <Step />
      <Step />
    </div>
  );
}
