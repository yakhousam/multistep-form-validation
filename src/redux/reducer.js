const initialValues = {
  location: "",
  firstName: "",
  lastName: "",
  license: "",
  expired: false,
  vehicle: "",
};

export function reducer(state = initialValues, action) {
  switch (action.type) {
    case "SAVE_FORM":
      return { ...action.values };
    case "POSTING_DRIVER":
      return { ...state, status: "posting" };
    case "SET_DRIVER":
      return { ...state, driver: action.values, status: "post_driver_success" };
    case "SET_ERROR":
      return { ...state, status: "error", error: action.error };
    default:
      return state;
  }
}
