import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Step.module.css";
export function Step({ active }) {
  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${active ? styles.active : ""}`}>
        Your Name
      </div>
      <div className={`${styles.icon} ${active ? styles.active : ""}`}>
        <FaMapMarkerAlt size={20} />
      </div>
      <div className={`${styles.dot} ${active ? styles.active : ""}`}></div>
    </div>
  );
}
