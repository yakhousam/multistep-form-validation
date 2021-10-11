export const validation = (values, path) => {
  const errors = {};
  switch (path) {
    case "/": {
      if (!values.location) {
        errors.location = "Required";
      }
      break;
    }
    case "/driver/1": {
      if (!values.firstName) {
        errors.firstName = "Required";
      }
      if (!values.lastName) {
        errors.lastName = "Required";
      }
      break;
    }
    case "/driver/2": {
      if (!values.license) {
        errors.license = "Required";
      }
      break;
    }
    case "/vehicle": {
      for (const key of Object.keys(values)) {
        if (!values[key]) {
          errors[key] = "Required";
        }
      }

      break;
    }
    default:
      break;
  }
  return errors;
};
