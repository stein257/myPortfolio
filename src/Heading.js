import Typing from 'react-typing-animation';
import {useEffect, useState} from "react";

function Heading({title}){


    return(

        <Typing speed={150} hideCursor={false} cursorClassName="cursor" >
            <h1 className="title">
                <span className="code-operator">{"`${"}</span>
                {title}
                <span className="code-operator">{"}`"}</span>
            </h1>
        </Typing>
    );

}

export default Heading;