import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';
import Background from './components/Background/Background'
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Phone from './components/Phone/Phone';
import Feat from './components/Features/Feat';
import About from './components/About/About';

function App() {

  const [scrollToFeatures, setScrollToFeatures] = useState(false);
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const [scrollToContact, setScrollToContact] = useState(false);

  return (
    <>
      <div className="body">
        <Router>
          <Background></Background>
          <div className='mainbody'>
            <Nav setScrollToFeatures={setScrollToFeatures} setScrollToAbout={setScrollToAbout} setScrollToContact={setScrollToContact}></Nav>
            <Phone></Phone>
            <Content></Content>
          </div>
          <div className="featureSec">
            <Feat scrollToFeatures={scrollToFeatures}></Feat>
          </div>
          <div className="aboutSec">
            <About scrollToAbout={scrollToAbout} scrollToContact={scrollToContact}></About>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
