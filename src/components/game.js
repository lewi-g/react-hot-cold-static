import React from "react";

import Header from "./header";
import GuessSection from "./guess-section";
import GuessCount from "./guess-count";
import GuessList from "./guess-list";
import InfoModal from "./info-modal";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameNumber: Math.floor(Math.random() * 100 + 1),
      feedback: "Make your guess!",
      guessedNumber: "",
      guesses: [],
      question: false
    };
  }

  onWhat(question) {
    this.setState({
      question: !this.state.question
    });
  }
  resetGame() {
    this.setState({
      gameNumber: Math.floor(Math.random() * 100 + 1),
      feedback: "Make your guess!",
      guessedNumber: "",
      guesses: [],
      question: false
    })
  }

  onChange(e) {
    this.setState({
      guessedNumber: e.target.value
    });
  }
  // feedbackMethod: function that changes this.state.feedback
  evaluateGuessedNumber(e) {
    //allow only numbers <100
    let winNum = this.state.gameNumber;
    let gNum = this.state.guessedNumber;
    let delta = Math.abs(gNum - winNum);
    console.log(delta);
    if (delta === 0) {
      this.setState({
        feedback: "You Won. Click new game to play again"

      });
    } else if (delta <= 5) {
      this.setState({
        feedback: "HOT!"
      });
    } else if ((delta <= 10) && (delta>= 5)) {
      this.setState({
        feedback: "Warm"
      });
    } else {
      this.setState({
        feedback: "Cold"
      });
    }
    this.setState({
      guesses: [...this.state.guesses, this.state.guessedNumber ]
    })
  }

  render() {
    if (this.state.question) {
      console.log(this.state.question);
      return <InfoModal onClick={e => this.onWhat(e)} />;
    } else {
      return (
        <div>
          <Header onClick={e => this.onWhat(e)} resetGame={e =>this.resetGame(e)}/>
          <GuessSection
            value={this.state.guessedNumber}
            onSubmit={e =>this.evaluateGuessedNumber(e)}
            onChange={e => this.onChange(e)}
            feedback={this.state.feedback}
          />
          <GuessCount attempts={this.state.guesses.length} />
          <GuessList guesses={this.state.guesses} />
        </div>
      );
    }
  }
}
