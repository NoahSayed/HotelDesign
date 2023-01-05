import React from 'react';
import Header
 from './components/Header';
 import './components/Search';
import Search from './components/Search';
import Images from './components/Featured';
import "./App.css";
import styled from "styled-components";
import Text from './components/Text'; 

function App() {
  return (
    <div className="App">
    <Header />
    <Search />
  <div className="homeContainer">

   <Images />
   <Text />

  </div>
  
    </div>
  );
}


const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default App;
