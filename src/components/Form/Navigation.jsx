import { Link } from "react-router-dom";
import styles from "./Form.module.css";

export function Navigation({ backUrl }) {
  return (
    <div className={styles["btn-wrapper"]}>
      {backUrl && (
        <Link className={styles["btn-back"]} to={backUrl}>
          Back
        </Link>
      )}

      <button type="submit" className={styles["btn-next"]}>
        Next
      </button>
    </div>
  );
}
