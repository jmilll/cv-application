import React, { Component } from "react";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import './normalize.css';
import './App.css';


class App extends Component {

  render() {

    return (
      <div className='App'>

        <h1 className='hero'>Resume Builder</h1>
        
        <PersonalInfo />

        <Education />

        <Skills />

        <PracticalExperience />
        
      </div>
    );
  }
}

export default App;