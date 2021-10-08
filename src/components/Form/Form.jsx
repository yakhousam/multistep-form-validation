import styles from "./Form.module.css";

export function Form() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        step 1/3
        <strong className={styles.strong}>
          Let's start with your location
        </strong>
      </h1>
      <form>
        <p style={{ color: "white" }}> Multi step form here</p>
      </form>
    </div>
  );
}
