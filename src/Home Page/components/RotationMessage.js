import {useEffect, useState} from "react";
import styles from '../styles/rotation.module.scss'

function RotationMessage(){

    const [phoneRotation, setPhoneRotation] = useState(0);
    const [firstLineTranslateY, setFirstLineTranslateY] = useState(-15);
    const [secondLineTranslateY, setSecondLineTranslateY] = useState(0);



    useEffect(() => {
        setTimeout(() =>{
            setPhoneRotation(-90);
            setFirstLineTranslateY(1);
            setSecondLineTranslateY(-14);
        }, 1000);
    }, []);




    return (
      <div className={styles["rotate-your-phone"]}>
        <p
          className={styles["rotate-message-first-line"]}
          style={{
            transform: "translateY(" + firstLineTranslateY.toString() + "vw)",
          }}
        >
          Please
        </p>
        <div
          className={styles["phone-rotation"]}
          style={{ transform: "rotateZ(" + phoneRotation.toString() + "deg)" }}
        ></div>
        <p
          className={styles["rotate-message-second-line"]}
          style={{
            transform: "translateY(" + secondLineTranslateY.toString() + "vw)",
          }}
        >
          rotate your phone
        </p>
      </div>
    );

}

export default RotationMessage;
