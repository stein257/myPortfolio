import linkedinImage from "../icons/linkedin-white-logo.png";
import githubImage from "../icons/GitHub-Mark-Light-64px.png";
import arrow from "../icons/Arrow.svg";
import { useEffect, useState } from "react";
import styles from "../styles/computer.module.scss";

function Computer() {
  const [linkedinClass, setLinkedinClass] = useState(
    styles["linkedin-power-off"]
  );
  const [githubClass, setGithubClass] = useState(styles["github-power-off"]);
  const [powerOff, setPowerOff] = useState(true);

  useEffect(() => {
    if (powerOff) {
      setLinkedinClass(styles["linkedin-power-off"]);
      setGithubClass(styles["github-power-off"]);
    } else {
      setLinkedinClass(styles["linkedin-power-on"]);
      setGithubClass(styles["github-power-on"]);
    }
  }, [powerOff]);

  const handleClick = () => {
    setPowerOff(!powerOff);
  };

  return (
    <div className={styles["computer-box"]}>
      <div className={styles["click-me"]}>
        click me!
        <img
          alt={"Click me Arrow"}
          src={arrow}
          className={styles["click-me-arrow"]}
        />
      </div>
      <button className={styles["power"]} onClick={handleClick}></button>
      <a
        href={"https://www.linkedin.com/in/sim%C3%B3n-stein/"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <img
          alt={"Linkedin Logo"}
          className={linkedinClass}
          src={linkedinImage}
        />
      </a>
      <a
        href={"https://github.com/stein257"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <img alt={"Github Logo"} src={githubImage} className={githubClass} />
      </a>
    </div>
  );
}


export default Computer;
