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
          question: !this.state.question
      });
			console.log(this.state.question);
  }
		onChange(e) {
        console.log(e.target.value)
		}

    onClick(e) {
            return <InfoModal />
        }
		// feedbackMethod: function that changes this.state.feedback

	render() {
         if (this.state.question) {
           console.log(this.state.question);
           return <InfoModal onClick={(e) =>this.onWhat(e)}/>
                  } 
        else 
				//if (this.state.question) {
        {
    return (
        <div>
            <Header onClick={(e) => this.onWhat(e)}/>
            <GuessSection onChange={this.onChange} feedback={this.state.feedback}/>
            <GuessCount attempts={this.state.attempts} />
            <GuessList guesses={this.state.guesses} />
        </div>
    );
	}
}
}
