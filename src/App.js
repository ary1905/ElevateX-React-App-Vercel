import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Feat from './components/Features/Feat';
import About from './components/About/About';
function App() {
  const [scrollToFeatures, setScrollToFeatures] = useState(false);
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const [scrollToContact, setScrollToContact] = useState(false);

  return (
    <div className="app">
      <Router>
        <div className='mainbody'>
          <Nav
            setScrollToFeatures={setScrollToFeatures}
            setScrollToAbout={setScrollToAbout}
            setScrollToContact={setScrollToContact}
          />
          <Content />
        </div>
        <div className="featureSec">
          <Feat scrollToFeatures={scrollToFeatures} />
        </div>
        <div className="aboutSec">
          <About
            scrollToAbout={scrollToAbout}
            scrollToContact={scrollToContact}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
