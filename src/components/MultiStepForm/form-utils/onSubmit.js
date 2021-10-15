export const onSubmit = (values, { setSubmitting }, history, path) => {
  switch (path) {
    case "/":
      return history.push("/driver/1");
    case "/driver/1":
      return history.push("/driver/2");
    case "/driver/2":
      return history.push("/vehicle");
    default: {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }
  }
};
