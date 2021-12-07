import linkedinImage from './Icons/linkedin-white-logo.png'
import githubImage from './Icons/GitHub-Mark-Light-64px.png'
import {useEffect, useState} from "react";


function Computer(){
    const [linkedinClass, setLinkedinClass] = useState('linkedin-power-on');
    const [githubClass, setGithubClass] = useState('github-power-on');
    const [powerOn, setPowerOn] = useState(false);

    useEffect(() => {
        if(powerOn){
            setLinkedinClass("linkedin-power-off");
            setGithubClass("github-power-off");
        } else{
            setLinkedinClass('linkedin-power-on');
            setGithubClass("github-power-on");
        }
    }, [powerOn]);


    const handleClick = () => {
        if(powerOn === false)
            setPowerOn(true);
        else
            setPowerOn(false);
    }



    return(
        <div className="computer-box" >
            <button className="power" onClick={handleClick} > </button>
            <a href={"https://www.linkedin.com/in/sim%C3%B3n-stein-a02408212/"} target={"_blank"} rel={"noreferrer"}>
                <img alt={"Linkedin Logo"} className={linkedinClass} src={linkedinImage}/>
            </a>
            <a href={"https://github.com/stein257"} target={"_blank"} rel={"noreferrer"}>
                <img alt={"Github Logo"} src={githubImage} className={githubClass}/>
            </a>
        </div>
    )


}


export default Computer;