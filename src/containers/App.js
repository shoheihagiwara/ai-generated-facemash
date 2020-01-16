import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation'
import FaceComparison from '../components/FaceComparison'
import Ranking from '../components/Ranking';



class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'main'
    }
  }

  setPageMain = () => {
    this.setState({ page: 'main' });
  }

  setPageRanking = () => {
    this.setState({ page: 'ranking' });
  }

  render() {
    return (
      <div className="App">
        {/* 
        <Particles className='particles'
          params={particlesOptions}
        />
        */}
        <Navigation page={this.state.page} onRankingClick={this.setPageRanking} onGoSeeFacesClick={this.setPageMain} />
        <h1>Who Has a Nicer Smile?</h1>
        {
          this.state.page === 'main' ?
          <FaceComparison /> :
          <Ranking />
        }
      </div>
    );
  }
}

export default App;
