import styles from "./Form.module.css";
import { BiCurrentLocation } from "react-icons/bi";
import { ErrorMessage, Field } from "formik";
import { Navigation } from "./Navigation";

export function StepLocation() {
  return (
    <>
      <h1 className={styles.h1}>
        step 1/3
        <strong className={styles.strong}>
          Let's start with your location
        </strong>
      </h1>
      <label htmlFor="location">Location</label>
      <div className={styles["input-container"]}>
        <Field
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
      <ErrorMessage name="location" component="div" className={styles.error} />
      <Navigation />
    </>
  );
}
