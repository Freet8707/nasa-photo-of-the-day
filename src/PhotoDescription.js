import React from 'react';
import './PhotoDescription.css'

function PhotoDescription(props){

    return (
        <div className="description">
            <p>{`    ${props.description}`}</p>
        </div>
    )
}

export default PhotoDescription