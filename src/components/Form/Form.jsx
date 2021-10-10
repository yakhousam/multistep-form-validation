import styles from "./Form.module.css";

import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

export function MultiStepForm() {
  return (
    <>
      <Formik
        initialValues={{}}
        validate={(values) => {
          const errors = {};
          // if (!values.email) {
          //   errors.email = "Required";
          // } else if (
          //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          // ) {
          //   errors.email = "Invalid email address";
          // }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <Switch>
              <Route exact path="/">
                <StepLocation />
              </Route>
              <Route path="/driver">
                <StepDriver />
              </Route>
              <Route path="/vehicle">
                <StepVehicle />
              </Route>
            </Switch>
          </Form>
        )}
      </Formik>
    </>
  );
}
function StepLocation() {
  return (
    <>
      <h1 className={styles.h1}>
        step 1/3
        <strong className={styles.strong}>
          Let's start with your location
        </strong>
      </h1>
      <label htmlFor="location">Location</label>
      <Field type="text" id="location" name="location" />
      <ErrorMessage name="location" component="div" />
      <Navigation nextUrl="/driver" />
    </>
  );
}
function Navigation({ backUrl, nextUrl }) {
  return (
    <div className={styles["btn-wrapper"]}>
      {backUrl && (
        <Link className={styles["btn-back"]} to={backUrl}>
          Back
        </Link>
      )}
      {nextUrl && (
        <Link className={styles["btn-next"]} to={nextUrl}>
          Next
        </Link>
      )}
    </div>
  );
}

function StepDriver() {
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
      <Field type="text" id="firstName" name="firstName" />
      <ErrorMessage name="firstName" component="div" />
      <label htmlFor="lastName">Last Name</label>
      <Field type="text" id="lastName" name="lastName" />
      <ErrorMessage name="lastName" component="div" />
      <Navigation backUrl="/" nextUrl="/driver/2" />
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
      <Field type="text" id="license" name="license" />
      <ErrorMessage name="license" component="div" />
      <label>
        <Field type="checkbox" name="expired" />
        Expired?
      </label>
      <Navigation backUrl="/driver/1" nextUrl="/vehicle" />
    </>
  );
}
function StepVehicle() {
  return (
    <>
      <h1 className={styles.h1}>
        step 3/3
        <strong className={styles.strong}>Please enter your vehicle</strong>
      </h1>
      <label htmlFor="vehicle">Vehicle</label>
      <Field type="text" id="vehicle" name="vehicle" />
      <ErrorMessage name="vehicle" component="div" />
      <Navigation backUrl="/driver/2" />
    </>
  );
}
