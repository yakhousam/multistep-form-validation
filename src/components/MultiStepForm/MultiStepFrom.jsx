import styles from "./Form.module.css";

import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { StepLocation } from "./StepLocation";
import { StepDriver } from "./StepDriver";
import { StepVehicle } from "./StepVehicle";
import { useOnSubmit } from "../../hooks/useOnSubmit";
import { useValidation } from "../../hooks/useValidation";

export function MultiStepForm() {
  const initialValues = useSelector((state) => state);
  const { onSubmit } = useOnSubmit();
  const { validation } = useValidation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form className={styles.form}>
          <Switch>
            <Route exact path="/">
              <StepLocation />
            </Route>
            <Route path="/driver">
              <StepDriver values={values} />
            </Route>
            <Route path="/vehicle">
              <StepVehicle values={values} />
            </Route>
          </Switch>
        </Form>
      )}
    </Formik>
  );
}
