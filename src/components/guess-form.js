import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {

  return (
    <form 
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit(e);
          }} >
      <input type="text" name="userGuess" id="userGuess"
        className="text" maxLength="3" autoComplete="off"
        placeholder="Enter your Guess" required
        value={props.target}
        onChange={(e) => props.onChange(e)}/>
      <input  type="submit" id="guessButton" className="button" name="submit" value="Guess" />
    </form>
  );
}

