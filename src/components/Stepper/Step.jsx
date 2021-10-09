import styles from "./Step.module.css";
export function Step({ active, title, icon }) {
  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${active ? styles.active : ""}`}>
        {title}
      </div>
      <div className={`${styles.icon} ${active ? styles.active : ""}`}>
        {icon}
      </div>
      <div className={`${styles.dot} ${active ? styles.active : ""}`}></div>
    </div>
  );
}
