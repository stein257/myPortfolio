import arrow from './Home Page/Icons/Arrow.svg'
import cvImage from './Home Page/Icons/CV.svg'
import nosferatu from './Home Page/Icons/Nosferatu.png'


function LeftDrawer(){



    return(
        <div className="drawer-left">
            <div className="left-shelf">
                <div className="download-resume">
                    get my cv
                    <img src={arrow} className={"cv-arrow"}/>
                </div>
                <img alt={"Simon's Resume"}src={cvImage} className="cv-image"/>
            </div>
            <div className="left-last-shelf">
                <div className="left-sub-shelf">
                    <a href={"https://github.com/stein257/NosferatuGame"} target={"_blank"}>
                        <span className="nosferatu-text">NOSFERATU</span>
                        <img alt={"NosferatuGame"}src={nosferatu} className="nosferatu-image"/>
                    </a>
                </div>
                <div>

                </div>
            </div>
        </div>
    );

}

export default LeftDrawer;