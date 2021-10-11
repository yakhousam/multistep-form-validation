import styles from "./Form.module.css";

import {
  Switch,
  Route,
  Redirect,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BiCurrentLocation } from "react-icons/bi";
import { validation } from "./form-validatiion";

export function MultiStepForm() {
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;

  const handleValidation = (values) => validation(values, path);

  const handleSubmit = (values, { setSubmitting }) => {
    switch (path) {
      case "/":
        return history.push("/driver/1");
      case "/driver/1":
        return history.push("/driver/2");
      case "/driver/2":
        return history.push("/vehicle");
      default: {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }
    }
  };
  return (
    <Formik
      initialValues={{
        location: "",
        firstName: "",
        lastName: "",
        license: "",
        expired: false,
        vehicle: "",
      }}
      validate={handleValidation}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form className={styles.form}>
          <Switch>
            <Route exact path="/">
              <StepLocation {...props} />
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
        <ErrorMessage
          name="location"
          component="div"
          className={styles.error}
        />
      <Navigation />
    </>
  );
}
function Navigation({ backUrl }) {
  return (
    <div className={styles["btn-wrapper"]}>
      {backUrl && (
        <Link className={styles["btn-back"]} to={backUrl}>
          Back
        </Link>
      )}

      <button type="submit" className={styles["btn-next"]}>
        Next
      </button>
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
function StepVehicle() {
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
