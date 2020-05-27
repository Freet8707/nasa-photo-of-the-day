import React, { useState, useEffect } from 'react';
import WeekCardComp from './WeekCardComp'
import axios from 'axios'

function WeekCards(){
    const dateRange = ['2020-05-18', '2020-05-19', '2020-05-20', '2020-05-21', '2020-05-22']
    const [photo1, setPhoto1] = useState([])
    const [photo2, setPhoto2] = useState([])
    const [photo3, setPhoto3] = useState([])
    const [photo4, setPhoto4] = useState([])
    const [photo5, setPhoto5] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${dateRange[0]}&api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY`)
        .then(response => setPhoto1(response))
        .catch(error => console.log('error', error))
    }, [])
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${dateRange[1]}&api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY`)
        .then(response => setPhoto2(response))
        .catch(error => console.log('error', error))
    }, [])
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${dateRange[2]}&api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY`)
        .then(response => setPhoto3(response))
        .catch(error => console.log('error', error))
    }, [])
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${dateRange[3]}&api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY`)
        .then(response => setPhoto4(response))
        .catch(error => console.log('error', error))
    }, [])
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${dateRange[4]}&api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY`)
        .then(response => setPhoto5(response))
        .catch(error => console.log('error', error))
    }, [])

    return(
        <div className='cards-container'>
            <WeekCardComp photo={photo1} />
            <WeekCardComp photo={photo2} />
            <WeekCardComp photo={photo3} />
            <WeekCardComp photo={photo4} />
            <WeekCardComp photo={photo5} />
        </div>
    )
}

export default WeekCards