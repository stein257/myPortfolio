import Computer from "./Computer";
import Code from "./Code";
import LeftDrawer from "./LeftDrawer";
import RightDrawer from "./RightDrawer";
import Phone from "./Phone";
import RotationMessage from "./RotationMessage";
import Coder from "./Coder";
import styles from "../styles/desktop.module.scss";

function Desktop() {
  return (
    <div className={styles["desktop"]}>
      <Coder />
      <Code />
      <Computer />
      <Phone />
      <LeftDrawer />
      <RightDrawer />
      <RotationMessage />
    </div>
  );
}

export default Desktop;
