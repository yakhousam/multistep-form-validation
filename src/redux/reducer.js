export function reducer(state = {}, action) {
  switch (action.type) {
    case "IS_FETCHING":
      return { ...state, status: "fetching" };
    case "SET_USER":
      return { ...state, user: action.values, status: "success" };
    case "SET_ERROR":
      return { ...state, status: "error", error: action.error };
    default:
      return state;
  }
}
