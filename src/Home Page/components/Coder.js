import codingImage from "../icons/Coding (1).svg";
import styles from "../styles/coder.module.scss";

function Coder() {
  return (
    <img
      alt={"Simon Coding"}
      className={styles["coding-image"]}
      src={codingImage}
    />
  );
}

export default Coder;
