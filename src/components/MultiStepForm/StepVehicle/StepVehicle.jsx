import stepStyles from "../Steps.module.css";
import { ErrorMessage, Field } from "formik";
import { Navigation } from "../Navigation";
import { useValidation } from "../../../hooks/useValidation";
import { Redirect } from "react-router-dom";

export function StepVehicle({ values }) {
  const { schema } = useValidation();

  switch (true) {
    case !schema.stepLocationSchema.isValidSync(values):
      return <Redirect to="/" />;
    case !schema.stepDriverOneSchema.isValidSync(values):
      return <Redirect to="/driver/1" />;
    case !schema.stepDriverTwoSchema.isValidSync(values):
      return <Redirect to="/driver/2" />;
    default:
      return (
        <>
          <h1 className={stepStyles.h1}>
            step 3/3
            <strong className={stepStyles.strong}>
              Please enter your vehicle
            </strong>
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
}
