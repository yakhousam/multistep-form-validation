import { MultiStepForm } from "./Form/Form";
import { Header } from "./Header/Header";
import { Stepper } from "./Stepper/Stepper";
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
