import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";

export function useOnSubmit() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;

  const onSubmit = (values, { setSubmitting }) => {
    switch (path) {
      case "/":
        return history.push("/driver/1");
      case "/driver/1":
        return history.push("/driver/2");
      case "/driver/2":
        return history.push("/vehicle");
      default: {
        dispatch({ type: "SAVE_FORM", values });
        dispatch({ type: "POST_DRIVER_DATA", values, history });
      }
    }
  };
  return { onSubmit };
}
