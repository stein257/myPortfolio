import {useEffect, useState} from "react";


function CenterSquare({squareClicked, setSquareClicked}){

    const [squareClass, setSquareClass] = useState("center")

    const handleClick = () =>{
        if(squareClicked !== 2) {
            setSquareClicked(2);
        }
        else {
            setSquareClicked(0);
        }
    }

    useEffect(() => {
        if(squareClicked === 2){
            setSquareClass("center-clicked");
        }
        else if( squareClicked === 0){
            setSquareClass("center");
        }
    }, [squareClicked]);

    return(
        <div className={"square " + squareClass} onClick={handleClick}>
            <div className="square-div">
                <span className="code-symbol">{'.contact('}</span>
                {'"me"'}
                <span className="code-symbol">{')'}</span>
            </div>
        </div>
    );
};

export default CenterSquare;