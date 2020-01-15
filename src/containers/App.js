import React, { Component } from 'react';
import './App.css';
import Navigation     from '../components/Navigation'
import FaceComparison from '../components/FaceComparison'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        {/* 
        <Particles className='particles'
          params={particlesOptions}
        />
        */}
        <Navigation />
        <h1>Who Has a Nicer Smile?</h1>
        <FaceComparison />
      </div>
    );
  }
}

export default App;
