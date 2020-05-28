import React, { useState, useEffect } from 'react';
import Card from './WeekCardComp'
import PotD from './PotD'
import axios from 'axios'

function WeekCards(){
    const dateRange = ['2020-05-18', '2020-05-19', '2020-05-20', '2020-05-21', '2020-05-22']
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        dateRange.map((element) => {
            axios.get(`https://api.nasa.gov/planetary/apod?date=${element}&api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY`)
            .then(response => {
                // console.log(response)
                photo.push(response.data.url)
            })
            .catch(error => console.log('error', error))
        })
        console.log(photo)
    }, [])

    return(
        <div>
        <div>
            <h1>Last Week's Photos!</h1>
        </div>
        <div className='cards-container'>
            {console.log(photo)}
            <Card photo={photo} />
            {/* <WeekCardComp photo={photo1} date='May 18, 2020' />
            <WeekCardComp photo={photo2} date='May 19, 2020' />
            <WeekCardComp photo={photo3} date='May 20, 2020' />
            <WeekCardComp photo={photo4} date='May 21, 2020' />
            <WeekCardComp photo={photo5} date='May 22, 2020' /> */}
            <PotD />
        </div>
        </div>
    )
}

export default WeekCards