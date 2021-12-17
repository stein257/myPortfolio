import arrow from './Icons/Arrow.svg'
import cvImage from './Icons/CV.svg'
import nosferatu from './Icons/Nosferatu.png'
import resume from './Resume/Simon Stein - Resume.pdf'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import desktopImage from './Icons/desktop.gif'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
                <div className="my-projects">
                    my projects
                    <img alt={"My projects Arrow"} src={arrow} className={"projects-arrow"}/>
                </div>
                <div className="left-sub-shelf">
                    <AutoPlaySwipeableViews interval={6000}>
                        <div className="project-container">
                            <a href={"https://github.com/stein257/NosferatuGame"} target={"_blank"} rel={"noreferrer"}>
                                <span className="nosferatu-text">NOSFERATU</span>
                                <img alt={"NosferatuGame"} src={nosferatu} className="nosferatu-image"/>
                            </a>
                        </div>
                        <div className="portfolio-project">
                            <a href={"https://github.com/stein257/myPortfolio"} target={"_blank"} rel={"noreferrer"}>
                                <span className="portfolio-text">MY PORTFOLIO</span>
                                <img alt={"Desktop"} src={desktopImage} className="nosferatu-image"/>
                            </a>
                        </div>
                    </AutoPlaySwipeableViews>
                </div>


            </div>
        </div>
    );

}

export default LeftDrawer;