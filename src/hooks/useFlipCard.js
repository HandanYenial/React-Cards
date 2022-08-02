//import React from "react";
import { useState } from "react";


const useFlipCard = () => {
    //make a piece of state can be named anything
    const [faceUp, setFaceUp] = useState(true);
    //make a function as flipcard to flip one side to other
    const flipCard = () => {
        //
        setFaceUp (faceUp => !faceUp);
    }
    return([faceUp, flipCard]);
}

//Then export the function
export default useFlipCard;

