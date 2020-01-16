import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation'
import FaceComparison from '../components/FaceComparison'
import Ranking from '../components/Ranking';
import 'tachyons';

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'main',
      ranking: {
        // will have object with properties of key as id and value as score.
      }

    
    }
  }

  setPageMain = () => {
    this.setState({ page: 'main' });
  }

  setPageRanking = () => {
    this.setState({ page: 'ranking' });
  }

  onFaceClick = (id) =>{
    console.log("clicked id:", id);
    console.log("current state: ", this.state);
    let ranking = {...this.state.ranking};
    console.log("ranking", ranking)
    if (ranking[id]) {
      ranking[id] = ranking[id] + 1;
    } else {
      ranking[id] = 1;
    }
    console.log("ranking", ranking)
    this.setState({ranking: ranking});
  }

  componentDidMount = () => {
    document.title = "AI Generate Facemash";
  }
  render() {
    return (
      <div className="App" >
        {/* 
        <Particles className='particles'
          params={particlesOptions}
        />
        */}
        <Navigation page={this.state.page} onRankingClick={this.setPageRanking} onGoSeeFacesClick={this.setPageMain} />
        <h1 className={"title"}>Who Has a Nicer Smile?</h1>
        {
          this.state.page === 'main' ?
            <FaceComparison onFaceClick={this.onFaceClick} /> :
            <Ranking ranking={this.state.ranking}/>
        }
      </div>
    );
  }
}

export default App;
