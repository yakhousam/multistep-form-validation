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

    default:
      return state;
  }
}
