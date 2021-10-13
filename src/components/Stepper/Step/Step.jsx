import { Link, useLocation } from "react-router-dom";
import styles from "./Step.module.css";

export function Step({ title, icon, url }) {
  const location = useLocation();
  const path = location.pathname.includes("driver")
    ? "/driver"
    : location.pathname;
  const isActive = path === url;
  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${isActive ? styles.active : ""}`}>
        {title}
      </div>
      <Link
        to={url}
        className={`${styles.icon} ${isActive ? styles.active : ""}`}
      >
        {icon}
      </Link>
      <div className={`${styles.dot} ${isActive ? styles.active : ""}`}></div>
    </div>
  );
}
