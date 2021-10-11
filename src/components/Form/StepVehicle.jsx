import { ErrorMessage, Field } from "formik";
import styles from "./Form.module.css";
import { Navigation } from "./Navigation";

export function StepVehicle() {
  return (
    <>
      <h1 className={styles.h1}>
        step 3/3
        <strong className={styles.strong}>Please enter your vehicle</strong>
      </h1>
      <label htmlFor="vehicle">Vehicle</label>
      <Field
        type="text"
        id="vehicle"
        name="vehicle"
        placeholder="Your vehicle mark"
      />
      <ErrorMessage className={styles.error} name="vehicle" component="div" />
      <Navigation backUrl="/driver/2" />
    </>
  );
}
