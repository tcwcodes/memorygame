import React from "react";

const Scoreboard = props => (
    <div className="row">
        <div className="col-md-4">
            <h3>Twin Peaks Memory Game</h3>
        </div>
        <div className="col-md-4">
            <h3>Click an image to begin!</h3>
        </div>
        <div className="col-md-4">
            <h3>Score: {props.score} / 12</h3>
            <h3>High score: {props.highScore} / 12</h3>
        </div>
    </div>
)


export default Scoreboard;