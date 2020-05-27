import React, { useState, useEffect } from 'react';
import WeekCardComp from './WeekCardComp'
import PotD from './PotD'
import axios from 'axios'

function WeekCards(){
    // const dateRange = ['2020-05-18', '2020-05-19', '2020-05-20', '2020-05-21', '2020-05-22']
    const [photo1, setPhoto1] = useState('')
    const [photo2, setPhoto2] = useState('')
    const [photo3, setPhoto3] = useState('')
    const [photo4, setPhoto4] = useState('')
    const [photo5, setPhoto5] = useState('')

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=2020-05-18&api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY`)
        .then(response => setPhoto1(response.data.url))
        .catch(error => console.log('error', error))
    }, [])
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=2020-05-19&api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY`)
        .then(response => setPhoto2(response.data.url))
        .catch(error => console.log('error', error))
    }, [])
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=2020-05-20&api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY`)
        .then(response => setPhoto3(response.data.url))
        .catch(error => console.log('error', error))
    }, [])
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=2020-05-21&api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY`)
        .then(response => setPhoto4(response.data.url))
        .catch(error => console.log('error', error))
    }, [])
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=2020-05-22&api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY`)
        .then(response => setPhoto5(response.data.url))
        .catch(error => console.log('error', error))
    }, [])

    return(
        <div>
        <div>
            <h1>Last Week's Photos!</h1>
        </div>
        <div className='cards-container'>
            <WeekCardComp photo={photo1} date='May 18, 2020' />
            <WeekCardComp photo={photo2} date='May 19, 2020' />
            <WeekCardComp photo={photo3} date='May 20, 2020' />
            <WeekCardComp photo={photo4} date='May 21, 2020' />
            <WeekCardComp photo={photo5} date='May 22, 2020' />
            <PotD />
        </div>
        </div>
    )
}

export default WeekCards