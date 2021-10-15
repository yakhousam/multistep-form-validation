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
      <Title title={title} isActive={isActive} />
      <Avatar url={url} icon={icon} isActive={isActive} />
      <Dote isActive={isActive} />
    </div>
  );
}

function Title({ title, isActive }) {
  return (
    <div className={`${styles.title} ${isActive ? styles.active : ""}`}>
      {title}
    </div>
  );
}

function Avatar({ url, icon, isActive }) {
  return (
    <Link
      to={url}
      className={`${styles.icon} ${isActive ? styles.active : ""}`}
    >
      {icon}
    </Link>
  );
}

function Dote({ isActive }) {
  return (
    <div className={`${styles.dot} ${isActive ? styles.active : ""}`}></div>
  );
}
