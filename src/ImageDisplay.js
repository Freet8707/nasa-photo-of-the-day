//ICE
import React from 'react';
import './imageDisplay.css';

function ImageDisplay(props) {

    return (
        <div className="imgWrapper">
            <img className="imgFit" src={props.source} alt={props.title}/>
        </div>
    )
}

export default ImageDisplay;