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
      if (!values.vehicle) {
        errors.vehicle = "Required";
      }
      break;
    }
    default:
      break;
  }
  return errors;
};
