import pythonLogo from "../Icons/python-package-index-svgrepo-com.svg";
import cplusplusLogo from "../Icons/C++-Logo.wine.svg";
import jsLogo from "../Icons/1024px-Unofficial_JavaScript_logo_2.svg.png";
import reactLogo from "../Icons/logo.svg";
import htmlLogo from "../Icons/html.png";
import cssLogo from "../Icons/css.png";

function RightDrawer(){


    return(
        <div className="drawer-right">
            <div className="shelf">
                <a href={"https://www.python.org"} target={"_blank"} rel={"noreferrer"}><img alt={"Python Logo"} src={pythonLogo} className="python-logo logo"/></a>
                <a href={"https://www.cplusplus.com/"} target={"_blank"} rel={"noreferrer"}><img alt={"C++ Logo"} src={cplusplusLogo} className="react-logo logo"/></a>
            </div>
            <div className="shelf">
                <a href={"https://www.javascript.com/"} target={"_blank"} rel={"noreferrer"}><img alt={"Javascript Logo"} src={jsLogo} className="python-logo logo"/></a>
                <a href={"https://reactjs.org/"} target={"_blank"} rel={"noreferrer"}><img alt={"React Logo"} src={reactLogo} className="react-logo logo"/></a>
            </div>
            <div className="last-shelf ">
                <a href={"https://developer.mozilla.org/en-US/docs/Web/HTML"} target={"_blank"} rel={"noreferrer"}> <img alt={"HTML Logo"} src={htmlLogo} className="html-logo logo"/></a>
                <a href={"https://developer.mozilla.org/en-US/docs/Web/CSS"} target={"_blank"} rel={"noreferrer"}><img alt={"CSS Logo"} src={cssLogo} className="python-logo logo"/></a>
            </div>
        </div>
    );
}

export default RightDrawer;