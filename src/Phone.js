import {useState} from "react";

function Phone(){

    const [wapLogoTransform, setWapLogoTransform] = useState("scale(0)");


    return(
        <div>
            <div className="phone-support">
            </div>
            <a href={"https://wa.me/5491158056691?text=I%20saw%20your%20portfolio%20and%20I%20want%20to%20get%20in%20touch"} target={"_blank"} rel={"noreferrer"}>
            <div className="phone" onMouseEnter={() => {setWapLogoTransform("scale(1)")}} onMouseLeave={() => {setWapLogoTransform("scale(0)")}}>
                <ion-icon name="logo-whatsapp" className="wap-logo" style={{transform: wapLogoTransform}}/>
            </div>
            </a>
        </div>
    );

}


export default Phone;