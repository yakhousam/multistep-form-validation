export const onSubmit = (
  values,
  { setSubmitting },
  history,
  path,
  dispatch
) => {
  switch (path) {
    case "/":
      return history.push("/driver/1");
    case "/driver/1":
      return history.push("/driver/2");
    case "/driver/2":
      return history.push("/vehicle");
    default: {
      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      //   setSubmitting(false);
      // }, 400);
      // dispatch({ action: "IS_SUBMITTING", payload: values });

      // const id = Math.floor(Math.random() * 10) + 1;
      dispatch({ type: "GET_USER", values });
    }
  }
};
