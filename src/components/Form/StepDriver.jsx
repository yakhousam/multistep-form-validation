import styles from "./Form.module.css";
import { ErrorMessage, Field } from "formik";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./Navigation";

export function StepDriver() {
  return (
    <Switch>
      <Route path="/driver/1">
        <StepDriverOne />
      </Route>
      <Route path="/driver/2">
        <StepDriverTwo />
      </Route>
      <Route path="/driver">
        <Redirect to="/driver/1" />
      </Route>
    </Switch>
  );
}
function StepDriverOne() {
  return (
    <>
      <h1 className={styles.h1}>
        step 2/3
        <strong className={styles.strong}>Please enter your name</strong>
      </h1>
      <label htmlFor="firstName">First Name</label>
      <Field
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Your first name"
      />
      <ErrorMessage className={styles.error} name="firstName" component="div" />
      <label htmlFor="lastName">Last Name</label>
      <Field
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Your last name"
      />
      <ErrorMessage className={styles.error} name="lastName" component="div" />
      <Navigation backUrl="/" />
    </>
  );
}
function StepDriverTwo() {
  return (
    <>
      <h1 className={styles.h1}>
        step 2/3
        <strong className={styles.strong}>
          Please enter your license number
        </strong>
      </h1>
      <label htmlFor="license">License</label>
      <Field
        type="text"
        id="license"
        name="license"
        placeholder="Your license number"
      />
      <ErrorMessage className={styles.error} name="license" component="div" />
      <label>
        <Field type="checkbox" name="expired" />
        Expired?
      </label>
      <Navigation backUrl="/driver/1" />
    </>
  );
}
