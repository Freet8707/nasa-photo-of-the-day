import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import ImageDisplay from './ImageDisplay'
import AuthorDateDisplay from './AuthorDateDisplay'
import PhotoDescription from './PhotoDescription'

function App() {
  const [apodData, setApodData] = useState({});
  const [apodUrl, setApodUrl] = useState("");
  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=xpfLwc9FBMcUvKuj84a1BlSh89ALxN4mCCdfMCyY')
    .then(response => {
      console.log(response);
      setApodData(response.data);
      setApodUrl(response.data.url);
    })
    .catch(error => console.log("error ", error))
  }, [])
  return (
    <div className="AppWrapper">
      
      <div className="App">
        <h1>NASA APOD (<span className="highlight">A</span>stronomy <span className="highlight">P</span>hoto <span className="highlight">O</span>f the <span className="highlight">D</span>ay) Display!</h1>
        <div className="contentFlex">
          <ImageDisplay source={apodUrl} title={apodData.title}/>
          {/* <p>
            Read through the instructions in the README.md file to build your NASA
            app! Have fun <span role="img" aria-label='go!'>🚀</span>!
          </p> */}
          <div className="photoDescription">
            <AuthorDateDisplay author={apodData.copyright} date={apodData.date}/>
            <PhotoDescription description={apodData.explanation}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
