import React, { Component } from 'react';
import Card from './Components/Card';
import Scoreboard from './Components/Scoreboard';
import Wrapper from './Components/Wrapper';
import characters from './characters';
import './App.css';

class App extends Component {

  state = {
    characters,
    pickedSoFar: [],
    score: 0,
    scores: [],
    highScore: 0
  };

  selectCard = id => {
    const characters = this.shuffleArray(this.state.characters);
    this.setState({
      characters
    });
    this.checkSelection(id)
  };

  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  checkSelection = id => {
    if (this.state.pickedSoFar.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({
        pickedSoFar: this.state.pickedSoFar.concat(id)
      });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1
    this.setState({
      score: newScore
    });
  };

  handleReset = () => {
    const newScores = this.state.scores.concat(this.state.score)
    this.setState({
      score: 0,
      pickedSoFar: [],
      scores: newScores
    });
    this.highScore(newScores);
  };

  highScore = (newScores) => {
    const sortedScores = newScores.sort(function(a, b) {
      return b - a
    });
    const highScore = sortedScores[0]
    this.setState({
      highScore: highScore
    });
  };

  render() {
    return (
        <div>
          <Scoreboard
            score = {this.state.score}
            highScore = {this.state.highScore}
          />
          <Wrapper>
            {this.state.characters.map(character => (
              <Card
              selectCard = {this.selectCard}
              id = {character.id}
              key = {character.id}
              name = {character.name}
              image = {character.image}
              />
            ))}
          </Wrapper>
        </div>
    );
  };
};

export default App;
