import React, { useState, useEffect } from 'react';
import Card from './WeekCardComp'
import axios from 'axios'

// function dateSet()
function WeekCard(props) {
    const [dates, setDates] = useState([])
    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?date=2020-05-18?api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY')
        .then(response => console.log(response))
        .catch(error => console.log('error', error))
    }, [])
    return(
        <div className='cards-container'>

        </div>
    )
}

export default WeekCard 