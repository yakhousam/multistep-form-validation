import styles from "./Header.module.css";
export function Header() {
  return (
    <div>
      <h1 className={styles.h1}>
        <strong className={styles.strong}>Multi-Step Form</strong>
        Follow the steps to complete the form
      </h1>
    </div>
  );
}
