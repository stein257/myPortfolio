import arrow from './Icons/Arrow.svg'
import cvImage from './Icons/CV.svg'
import nosferatu from './Icons/Nosferatu.png'
import resume from './Resume/Simon Stein - Resume.pdf'

function LeftDrawer(){



    return(
        <div className="drawer-left">
            <div className="left-shelf">
                <div className="download-resume">
                    get my cv
                    <img alt={"Get my cv Arrow"} src={arrow} className={"cv-arrow"}/>
                </div>
                <a href={resume} target={"_blank"} rel={"noreferrer"}>
                    <img alt={"Simon's Resume"} src={cvImage} className="cv-image"/>
                </a>
            </div>
            <div className="left-last-shelf">
                <div className="left-sub-shelf">
                    <a href={"https://github.com/stein257/NosferatuGame"} target={"_blank"} rel={"noreferrer"}>
                        <span className="nosferatu-text">NOSFERATU</span>
                        <img alt={"NosferatuGame"} src={nosferatu} className="nosferatu-image"/>
                    </a>
                </div>
                <div className='left-second-sub-shelf'>

                </div>
            </div>
        </div>
    );

}

export default LeftDrawer;