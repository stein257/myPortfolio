import linkedinImage from './Icons/linkedin-white-logo.png'
import githubImage from './Icons/GitHub-Mark-Light-64px.png'
import arrow from './Icons/Arrow.svg'
import {useEffect, useState} from "react";


function Computer(){
    const [linkedinClass, setLinkedinClass] = useState('linkedin-power-off');
    const [githubClass, setGithubClass] = useState('github-power-off');
    const [powerOff, setPowerOff] = useState(true);

    useEffect(() => {
        if(powerOff){
            setLinkedinClass("linkedin-power-off");
            setGithubClass("github-power-off");
        } else{
            setLinkedinClass('linkedin-power-on');
            setGithubClass("github-power-on");
        }
    }, [powerOff]);


    const handleClick = () => {
        if(powerOff === false)
            setPowerOff(true);
        else
            setPowerOff(false);
    }



    return(
        <div className="computer-box" >
            <div className="click-me">
                click me!
                <img alt={"Click me Arrow"} src={arrow} className="click-me-arrow"/>
            </div>
            <button className="power" onClick={handleClick} > </button>
            <a href={"https://www.linkedin.com/in/sim%C3%B3n-stein/"} target={"_blank"} rel={"noreferrer"}>
                <img alt={"Linkedin Logo"} className={linkedinClass} src={linkedinImage}/>
            </a>
            <a href={"https://github.com/stein257"} target={"_blank"} rel={"noreferrer"}>
                <img alt={"Github Logo"} src={githubImage} className={githubClass}/>
            </a>
        </div>
    )


}


export default Computer;