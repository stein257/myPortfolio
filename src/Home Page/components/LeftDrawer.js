import arrow from "../icons/Arrow.svg";
import cvImage from "../icons/CV.svg";
import nosferatu from "../icons/Nosferatu.png";
import resume from "../resume/Simon Stein Resume.pdf";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import desktopImage from "../icons/desktop.gif";
import styles from "../styles/left-drawer.module.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function LeftDrawer() {
  const Project = ({ link, text, image, textClassName, alt }) => {
    return (
      <div>
        <a href={link} target={"_blank"} rel={"noreferrer"}>
          <span className={textClassName}>{text}</span>
          <img alt={alt} src={image} className={styles["project-image"]} />
        </a>
      </div>
    );
  };

  const projects = [
    {
      link: "https://github.com/stein257/NosferatuGame",
      text: "NOSFERATU",
      image: nosferatu,
      textClassName: styles["nosferatu-text"],
      alt: "Nosferatu Game",
    },
    {
      link: "https://github.com/stein257/myPortfolio",
      text: "MY PORTFOLIO",
      image: desktopImage,
      textClassName: styles["portfolio-text"],
      alt: "Desktop",
    },
  ];

  return (
    <div className={styles["drawer-left"]}>
      <div className={styles["left-shelf"]}>
        <div className={styles["download-resume"]}>
          get my cv
          <img
            alt={"Get my cv Arrow"}
            src={arrow}
            className={styles["cv-arrow"]}
          />
        </div>
        <a href={resume} target={"_blank"} rel={"noreferrer"}>
          <img
            alt={"Simon's resume"}
            src={cvImage}
            className={styles["cv-image"]}
          />
        </a>
      </div>
      <div>
        <div className={styles["my-projects"]}>
          my projects
          <img alt={"My projects Arrow"} src={arrow} />
        </div>
        <div>
          <AutoPlaySwipeableViews interval={6000}>
            {projects.map((project, index) => (
              <Project
                key={index}
                link={project.link}
                text={project.text}
                image={project.image}
                textClassName={project.textClassName}
                alt={project.alt}
              />
            ))}
          </AutoPlaySwipeableViews>
        </div>
      </div>
    </div>
  );
}

export default LeftDrawer;
