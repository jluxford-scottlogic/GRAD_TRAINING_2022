import React from 'react';
import './App.css';
import Banner from './components/Banner';
import scottLogicBanner from './assets/banner-pos.svg';
import Section from './components/Section';

const App = () => {
  return (
    <div className="page flex-center">
        <div className="content">
            <Banner img={scottLogicBanner} tagline="ALTOGETHER SMARTER"/>
            <Section
              header='CI/CD Training'
              content={
                [
                  "This is a very simple static React app that you will eventually deploy to GitHub via a CircleCi pipeline",
                  "The pipeline should fail the first time because of a failing test."
                ]
              }/>
        </div>
    </div>
  );
}

export default App;
