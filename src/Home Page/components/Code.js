import Typing from "react-typing-animation";
import styles from "../styles/code.module.scss";

function Code() {
  return (
    <div className={styles["code-container"]}>
      <Typing speed={150} cursorClassName={styles["cursor"]} loop={true}>
        <div className={styles["code"]}>
          <p className={styles["code-first-line"]}>
            <span className={styles["code-keyword"]}>{"int "}</span>
            <span className={styles["code-function"]}>{"main"}</span>
            <span className={styles["code-operator"]}>{"(){"}</span>
          </p>
          <p className={styles["code-second-line"]}>
            <span className={styles["code-attribute"]}>{"person "}</span>
            <span className={styles["code-operator"]}>{"*"}</span>
            <span className={styles["code-variable"]}>{"simon "}</span>
            <span className={styles["code-operator"]}>{"= "}</span>
            <span className={styles["code-keyword"]}>{"new "}</span>
            <span className={styles["code-function"]}>{"person"}</span>
            <span className={styles["code-operator"]}>{";"}</span>
          </p>
          <p className={styles["code-third-line"]}>
            <span className={styles["code-keyword"]}>{"while"}</span>
            <span className={styles["code-operator"]}>{"("}</span>
            <span className={styles["code-variable"]}>{"simon "}</span>
            <span className={styles["code-operator"]}>{"-> "}</span>
            <span className={styles["code-function"]}>{"awake"}</span>
            <span className={styles["code-operator"]}>{"()){"}</span>
          </p>
          <p className={styles["code-fourth-line"]}>
            <span className={styles["code-variable"]}>{"simon "}</span>
            <span className={styles["code-operator"]}>{"-> "}</span>
            <span className={styles["code-function"]}>{"code"}</span>
            <span className={styles["code-operator"]}>{"();"}</span>
          </p>
          <p
            className={`${styles["code-fifth-line"]} ${styles["code-operator"]}`}
          >
            {"}"}
          </p>
          <p
            className={`${styles["code-sixth-line"]} ${styles["code-operator"]}`}
          >
            {"}"}
          </p>
          <Typing.Reset delay={2000} />
        </div>
      </Typing>
    </div>
  );
}

export default Code;
