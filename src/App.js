import React, { Component } from 'react';
import Card from './Components/Card';
import Wrapper from './Components/Wrapper';
import characters from './characters';
import './App.css';

let pickedSoFar = [];
let score = 0;

class App extends Component {

  state = {
    characters
  };

  selectCard = id => {
    // const characters = this.state.characters.filter(character => character.id !== id);
    this.checkSelection(id);
    const characters = this.shuffleArray(this.state.characters);
    this.setState({ characters });
    pickedSoFar.push(id);
    console.log("Score: " + score);
    // console.log("ID of character you picked: " + id);
    // console.log("IDs of characters picked so far: " + pickedSoFar);
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
    let pickedSame = false;
    for (let i = 0; i < pickedSoFar.length; i++) {
      if (pickedSoFar[i] === id) {
        this.pickedSame = true;
      } else {};
    };
    if (this.pickedSame === true) {
      score = 0;
    } else {
      score++;
    }
  };

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-md-4">
              <h3>Twin Peaks Memory Game</h3>
            </div>
            <div className="col-md-4">
              <h3>Click an image to begin!</h3>
            </div>
            <div className="col-md-4">
              <h3>Score: {score}</h3>
            </div>
          </div>
          <div className="jumbotron">
            <h1 className="display-4">Twin Peaks Trivia Game</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
          </div>
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
