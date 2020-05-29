import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const DivWidth = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`;

function PotD(){
    const [photoUrl, setPhotoUrl] = useState('')
    const [photoDesc, setPhotoDesc] = useState('')
    
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY')
        .then(response => {
            console.log(response)
            setPhotoUrl(response.data.url)
            setPhotoDesc(response.data.explanation)
        })
        .catch(error => console.log('error: ', error))
    }, [])
    return (
        <DivWidth className='photoOfTheDay'>
            <h1>NASA PHOTO OF THE DAY</h1>
            <h4>{photoDesc}</h4>
            <img className='potdFit' src={photoUrl} alt='NASA photo of the day' />
        </DivWidth>
    )
}

export default PotD