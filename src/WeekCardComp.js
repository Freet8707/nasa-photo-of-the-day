import React, { useState } from 'react'

function WeekCardComp(props){
    const photo = props.photo
    const date = props.date
    console.log(photo)
    return(
        
        <div className='picture-card'>
            <h3>{date}</h3>
            <img className='photo-fit' src={photo} alt='nasa photo' />
        </div>
    )
}

export default WeekCardComp