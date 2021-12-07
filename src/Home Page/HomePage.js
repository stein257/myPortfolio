import codingImage from './Coding (1).svg';

import Computer from "./Computer";
import Code from "./Code";
import LeftDrawer from "../LeftDrawer";
import RightDrawer from "../RightDrawer";
import Phone from "../Phone";

function HomePage (){


    return(
      <div className="home">
          <Code/>
          <img alt={"Simon Coding"} className="coding-image" src={codingImage}/>
          <Computer/>
          <Phone/>
          <LeftDrawer/>
          <RightDrawer/>
      </div>
    );
};

export default HomePage;