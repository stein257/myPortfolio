import {useEffect, useState} from "react";


function FirstSquare({squareClicked, setSquareClicked}){

    const [squareClass, setSquareClass] = useState('first');


    const handleClick = () =>{
        if(squareClicked !== 1)
            setSquareClicked(1);
        else
            setSquareClicked(0);
    }

    useEffect(() => {
        if (squareClicked === 2){
            setSquareClass('first-when-center-clicked');
        }
        else if (squareClicked === 0){
            setSquareClass('first');
        }
    }, [squareClicked])

    return(

        <div className={"square " + squareClass} onClick={handleClick}>
            <div className="square-div">
                <span className="code-symbol">{'.about('}</span>
                    {'"me"'}
                <span className="code-symbol">{')'}</span>
            </div>
        </div>
    );
}

export default FirstSquare;