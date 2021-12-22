import codingImage from './Icons/Coding (1).svg';

import Computer from "./Computer";
import Code from "./Code";
import LeftDrawer from "./LeftDrawer";
import RightDrawer from "./RightDrawer";
import Phone from "./Phone";

function Desktop (){


    return(
      <div className="desktop">
          <Code/>
          <img alt={"Simon Coding"} className="coding-image" src={codingImage}/>
          <Computer/>
          <Phone/>
          <LeftDrawer/>
          <RightDrawer/>
      </div>
    );
}

export default Desktop;