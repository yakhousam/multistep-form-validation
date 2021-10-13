import styles from "./StepLocation.module.css";
import stepsStyles from "../Steps.module.css";
import { BiCurrentLocation } from "react-icons/bi";
import { ErrorMessage, Field } from "formik";
import { Navigation } from "../Navigation";

export function StepLocation() {
  return (
    <>
      <h1 className={stepsStyles.h1}>
        step 1/3
        <strong className={stepsStyles.strong}>
          Let's start with your location
        </strong>
      </h1>
      <label className={stepsStyles.label} htmlFor="location">
        Location
      </label>
      <div className={styles["input-container"]}>
        <Field
          className={stepsStyles.input}
          type="text"
          id="location"
          name="location"
          placeholder="Please, click button location or enter your location"
        />
        <BiCurrentLocation
          className={styles["icon-location"]}
          onClick={() => console.log("location....")}
        />
      </div>
      <ErrorMessage
        name="location"
        component="div"
        className={stepsStyles.error}
      />
      <Navigation />
    </>
  );
}
