import styles from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Formik, Form } from "formik";
import { initialValues, validation, onSubmit } from "./form-utils";
import { StepLocation } from "./StepLocation";
import { StepDriver } from "./StepDriver";
import { StepVehicle } from "./StepVehicle";

export function MultiStepForm() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;
  console.log(state, " state");

  const handleValidation = () => validation(path);

  const handleSubmit = (values, formikBag) => {
    onSubmit(values, formikBag, history, path, dispatch);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={handleValidation}
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
              {!values.location ? (
                <Redirect to="/" />
              ) : !values.firstName || !values.license ? (
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
