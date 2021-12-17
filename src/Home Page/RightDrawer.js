import pythonLogo from "./Icons/python-package-index-svgrepo-com.svg";
import cplusplusLogo from "./Icons/C++-Logo.wine.svg";
import jsLogo from "./Icons/1024px-Unofficial_JavaScript_logo_2.svg.png";
import reactLogo from "../logo.svg";
import htmlLogo from "./Icons/html.png";
import cssLogo from "./Icons/css.png";

function RightDrawer(){


    return(
        <div className="drawer-right">
            <div className="shelf">
                <img alt={"Python Logo"} src={pythonLogo} className="python-logo logo"/>
                <img alt={"C++ Logo"} src={cplusplusLogo} className="react-logo logo"/>
            </div>
            <div className="shelf">
                <img alt={"Javascript Logo"} src={jsLogo} className="python-logo logo"/>
                <img alt={"React Logo"} src={reactLogo} className="react-logo logo"/>
            </div>
            <div className="last-shelf ">
                <img alt={"HTML Logo"} src={htmlLogo} className="html-logo logo"/>
                <img alt={"CSS Logo"} src={cssLogo} className="python-logo logo"/>
            </div>
        </div>
    );
}

export default RightDrawer;