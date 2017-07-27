import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import InfoModal from './info-modal';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: 'Make your guess!',
			attempts: 3,
			guesses: [10,15,25],
            question: false



        }
    }
        onWhat (question) {
      this.setState({
          question: true
      });
  }
		onChange(e) {
        console.log(e.target.value)
		}

        onClick(e) {

            
            return <InfoModal />
    
        }
		// feedbackMethod: function that changes this.state.feedback

	render() {
        if (!this.state.question) {
            console.log('we are almost there');
            return <InfoModal/>
                } 
        else if (this.state.question) {
        console.log('else if is here!')
    return (
        <div>
            <Header onClick={() => this.onWhat(true)}/>
            <GuessSection onChange={this.onChange} feedback={this.state.feedback}/>
            <GuessCount attempts={this.state.attempts} />
            <GuessList guesses={this.state.guesses} />
        </div>
    );
	}
}

