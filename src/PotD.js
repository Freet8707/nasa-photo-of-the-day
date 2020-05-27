import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PotD(){
    const [photoUrl, setPhotoUrl] = useState('')

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY')
        .then(response => setPhotoUrl(response.data.url))
        .catch(error => console.log('error: ', error))
    })
    return (
        <div className='photoOfTheDay'>
            <h1>NASA PHOTO OF THE DAY</h1>
            <img className='potdFit' src={photoUrl} alt='NASA photo of the day' />
        </div>
    )
}

export default PotD