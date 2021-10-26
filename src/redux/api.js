export function postMultiStepsForm(values) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(values);
    }, 500)
  );
}
