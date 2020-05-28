import React, { useState } from 'react'

function WeekCardComp(props){
    console.log(props.photo)
    return (
        <>{props.photo.map(url => {
            return (
                <div className='picture-card' >
                    {/* <img className='photo-fit' src={url} alt='nasa photo' /> */}
                </div>
            )
        })}</>
    )
}

export default WeekCardComp