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
      gameNumber: '',
			feedback: "Make your guess!",
			guessedNumber: '',
			guesses: [10, 15, 25],
			question: false
		};
	}


	onWhat(question) {
		this.setState({
			question: !this.state.question
		});
	}
	// onChange(e) {
	// 	this.setState({
	// 		guessedNumber: e.target.value
	// 	})
		// this.state.guesses.push(e);
	// 	console.log(this.state.guessedNumber);
	// }
	onChange(e) {
    this.setState({
      guessedNumber: e.target.value
    });
	}
	// feedbackMethod: function that changes this.state.feedback
  evaluateGuessedNumber(e) {
    // evaluate guessedNUmber against gameNumber and give appropriate feedback
    // push guessedNumber to guesses
    //

  }
  // componentDidMount(){
  //   make random number and add it to my state
  // }
	render() {
		if (this.state.question) {
			console.log(this.state.question);
			return <InfoModal onClick={e => this.onWhat(e)} />;
		} else {
			return (
				<div>
					<Header onClick={e => this.onWhat(e)} />
					<GuessSection
            value={this.state.guessedNumber}
						onSubmit={this.onSubmit}
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
