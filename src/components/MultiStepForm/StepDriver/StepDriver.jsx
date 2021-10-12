import { ErrorMessage, Field } from "formik";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "../Navigation";
import stepsStyles from "../Steps.module.css";

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
      <h1 className={stepsStyles.h1}>
        step 2/3
        <strong className={stepsStyles.strong}>Please enter your name</strong>
      </h1>
      <label className={stepsStyles.label} htmlFor="firstName">
        First Name
      </label>
      <Field
        className={stepsStyles.input}
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Your first name"
      />
      <ErrorMessage
        className={stepsStyles.error}
        name="firstName"
        component="div"
      />
      <label className={stepsStyles.label} htmlFor="lastName">
        Last Name
      </label>
      <Field
        className={stepsStyles.input}
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Your last name"
      />
      <ErrorMessage
        className={stepsStyles.error}
        name="lastName"
        component="div"
      />
      <Navigation backUrl="/" />
    </>
  );
}
function StepDriverTwo() {
  return (
    <>
      <h1 className={stepsStyles.h1}>
        step 2/3
        <strong className={stepsStyles.strong}>
          Please enter your license number
        </strong>
      </h1>
      <label className={stepsStyles.label} htmlFor="license">
        License
      </label>
      <Field
        className={stepsStyles.input}
        type="text"
        id="license"
        name="license"
        placeholder="Your license number"
      />
      <ErrorMessage
        className={stepsStyles.error}
        name="license"
        component="div"
      />
      <label className={stepsStyles.label}>
        <Field className={stepsStyles.input} type="checkbox" name="expired" />
        Expired?
      </label>
      <Navigation backUrl="/driver/1" />
    </>
  );
}
