import React from "react";
import "./App.css";
import WeekCards from './WeekCards'
import PotD from './PotD'
import jakeWeirick from './assets/jake-weirick.jpg'
import styled from 'styled-components'

const NewDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: ${props => (props.background === 'space' ? `url(${jakeWeirick})` : 'none')};
  background-attachment: fixed;
  background-size: 100% 100%;
  background-position: center;  
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
`;
// console.log({jakeWeirick})

function App() {
  return (
    <div className ='App'>
      <NewDiv background='space' >        
        <PotD />
        <WeekCards />
      </NewDiv>          
    </div>
  );
}

export default App;
