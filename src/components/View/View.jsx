import { MultiStepForm } from "../MultiStepForm";
import { Header } from "../Header";
import { Stepper } from "../Stepper";
import styles from "./View.module.css";

export function View() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <div className={styles.wrapper}>
          <Stepper />
          <MultiStepForm />
        </div>
      </div>
    </main>
  );
}
