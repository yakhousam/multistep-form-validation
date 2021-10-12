import stepStyles from "../Steps.module.css";
import { ErrorMessage, Field } from "formik";
import { Navigation } from "../Navigation";

export function StepVehicle() {
  return (
    <>
      <h1 className={stepStyles.h1}>
        step 3/3
        <strong className={stepStyles.strong}>Please enter your vehicle</strong>
      </h1>
      <label className={stepStyles.label} htmlFor="vehicle">
        Vehicle
      </label>
      <Field
        className={stepStyles.input}
        type="text"
        id="vehicle"
        name="vehicle"
        placeholder="Your vehicle mark"
      />
      <ErrorMessage
        className={stepStyles.error}
        name="vehicle"
        component="div"
      />
      <Navigation backUrl="/driver/2" />
    </>
  );
}
