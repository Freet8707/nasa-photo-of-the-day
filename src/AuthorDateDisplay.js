import React from 'react';
import './authorAndDateCss.css'

function AuthorDateDisplay(props){
    return (
    <div className="authorAndDate">
        <h3>Photo taken by: {props.author}<br /> on {props.date}</h3>
    </div>
    )
}

export default AuthorDateDisplay