import React from "react";

function Die(props) {
    const styles ={
        backgroundColor: props.isHeld ? "rgba(236, 73, 73, 0.767)" : "rgba(231, 224, 224, 0.829)"
    }
    return(
        <div
         className="die-face" 
         style={styles}
         onClick={props.holdDice}>
            <h2 className="die-num">{props.value}</h2>

        </div> 
    );
    
};

export default Die;