import {useEffect, useState} from "react";


function FinalSquare({squareClicked, setSquareClicked}){

    const [squareClass, setSquareClass] = useState('final');

    const handleClick = () =>{
        if(squareClicked !== 3)
            setSquareClicked(3);
        else {
            setSquareClicked(0);
        }
    }

    useEffect(() => {
        if (squareClicked === 2){
            setSquareClass('final-when-center-clicked');
        }
        else if (squareClicked === 0){
            setSquareClass('final');
        }
    }, [squareClicked])

    return(
        <div className={"square " + squareClass} onClick={handleClick}>
            <div className="square-div">
                <span className="code-symbol">{'.skillsOf('}</span>
                {'"me"'}
                <span className="code-symbol">{')'}</span>
            </div>
        </div>
    );
}

export default FinalSquare;