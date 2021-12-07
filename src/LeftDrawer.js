import download from './Home Page/Icons/arrow-down-circle-outline.svg'
import cvImage from './Home Page/Icons/CV.svg'

function LeftDrawer(){



    return(
        <div className="drawer-left">
            <div className="left-shelf">
                <div className="download-resume"></div>
                <img src={cvImage} className="cv-image"/>
            </div>
            <div className="last-shelf">

            </div>
        </div>
    );

}

export default LeftDrawer;