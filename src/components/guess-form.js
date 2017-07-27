import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    
    return (
        <form>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required 
                onSubmit={(e) => {
                    {e.preventDefault();
                    props.onSubmit(e.target.value)}}} />
            <input onSubmit={e => 
            {e.preventDefault();
             props.onSubmit(e.target.value)}} type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
}

