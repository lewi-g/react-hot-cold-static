import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: 'Make your guess!',
						attempts: 3,
						guesses: [10,15,25]

        }
    }
		onChange(e) {
			console.log('who goes there?');
		}
		// feedbackMethod: function that changes this.state.feedback

	render() {
    return (
        <div>
            <Header />
            <GuessSection onChange={this.onChange} feedback={this.state.feedback}/>
            <GuessCount attempts={this.state.attempts} />
            <GuessList guesses={this.state.guesses} />
        </div>
    );
	}
}

