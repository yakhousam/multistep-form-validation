import styles from "./Form.module.css";

import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Formik, Form } from "formik";
import { validation } from "./form-validatiion";
import { StepLocation } from "./StepLocation";
import { StepDriver } from "./StepDriver";
import { StepVehicle } from "./StepVehicle";

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
      {({ values }) => (
        <Form className={styles.form}>
          <Switch>
            <Route exact path="/">
              <StepLocation />
            </Route>
            <Route path="/driver">
              {!values.location ? <Redirect to="/" /> : <StepDriver />}
            </Route>
            <Route path="/vehicle">
              {!values.firstName || !values.license ? (
                <Redirect to="/driver" />
              ) : (
                <StepVehicle />
              )}
            </Route>
          </Switch>
        </Form>
      )}
    </Formik>
  );
}
