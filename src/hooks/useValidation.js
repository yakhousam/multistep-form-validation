import { useLocation } from "react-router-dom";
import * as yup from "yup";

export const stepLocationSchema = yup.object().shape({
  location: yup.string().required(),
});

export const stepDriverOneSchema = yup.object().shape({
  location: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

export const stepDriverTwoSchema = yup.object().shape({
  location: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  license: yup.string().required(),
});

export const stepVehicleSchema = yup.object().shape({
  location: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  license: yup.string().required(),
  vehicle: yup.string().required(),
});

export const useValidation = () => {
  const location = useLocation();
  const path = location.pathname;

  const validation = () => {
    switch (path) {
      case "/": {
        return stepLocationSchema;
      }
      case "/driver/1": {
        return stepDriverOneSchema;
      }
      case "/driver/2": {
        return stepDriverTwoSchema;
      }
      case "/vehicle": {
        return stepVehicleSchema;
      }
      default:
        break;
    }
  };
  return {
    validation,
    schema: {
      stepLocationSchema,
      stepVehicleSchema,
      stepDriverOneSchema,
      stepDriverTwoSchema,
      stepDriver: stepDriverOneSchema.concat(stepDriverTwoSchema),
    },
  };
};
