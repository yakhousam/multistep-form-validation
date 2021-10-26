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
    case "UPDATE_FORM":
      return { ...state, ...action.values };
    default:
      return state;
  }
}
