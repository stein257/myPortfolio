import pythonLogo from "../icons/python-package-index-svgrepo-com.svg";
import cplusplusLogo from "../icons/C++-Logo.wine.svg";
import jsLogo from "../icons/1024px-Unofficial_JavaScript_logo_2.svg.png";
import reactLogo from "../icons/logo.svg";
import htmlLogo from "../icons/html.png";
import cssLogo from "../icons/css.png";
import styles from "../styles/right-drawer.module.scss";

function RightDrawer() {
  return (
    <div className={styles["drawer-right"]}>
      <div className={styles["shelf"]}>
        <a href={"https://www.python.org"} target={"_blank"} rel={"noreferrer"}>
          <img
            alt={"Python Logo"}
            src={pythonLogo}
            className={`${styles["python-logo"]} ${styles["logo"]}`}
          />
        </a>
        <a
          href={"https://www.cplusplus.com/"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img
            alt={"C++ Logo"}
            src={cplusplusLogo}
            className={`${styles["react-logo"]} ${styles["logo"]}`}
          />
        </a>
      </div>
      <div className={styles["shelf"]}>
        <a
          href={"https://www.javascript.com/"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img
            alt={"Javascript Logo"}
            src={jsLogo}
            className={`${styles["python-logo"]} ${styles["logo"]}`}
          />
        </a>
        <a href={"https://reactjs.org/"} target={"_blank"} rel={"noreferrer"}>
          <img
            alt={"React Logo"}
            src={reactLogo}
            className={`${styles["react-logo"]} ${styles["logo"]}`}
          />
        </a>
      </div>
      <div className={styles["last-shelf"]}>
        <a
          href={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          {" "}
          <img
            alt={"HTML Logo"}
            src={htmlLogo}
            className={`${styles["html-logo"]} ${styles["logo"]}`}
          />
        </a>
        <a
          href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img
            alt={"CSS Logo"}
            src={cssLogo}
            className={`${styles["python-logo"]} ${styles["logo"]}`}
          />
        </a>
      </div>
    </div>
  );
}

export default RightDrawer;
