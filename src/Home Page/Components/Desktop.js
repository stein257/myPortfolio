import Computer from "./Computer";
import Code from "./Code";
import LeftDrawer from "./LeftDrawer";
import RightDrawer from "./RightDrawer";
import Phone from "./Phone";
import RotationMessage from "./RotationMessage";
import Coder from "./Coder";

function Desktop (){


    return(
      <div className="desktop">
          <Code/>
          <Coder/>
          <Computer/>
          <Phone/>
          <LeftDrawer/>
          <RightDrawer/>
          <RotationMessage/>
      </div>
    );
}

export default Desktop;