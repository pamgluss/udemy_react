import React from 'react';
import cssClasses from './UserInput.css';

const userInput = (props) => {
  return(
    <div className={cssClasses.userInput}>
      <p>Change usernames, separate with a space</p>
      <input className={cssClasses.inputBox} type='text' onChange={props.change} value={props.username}/>
    </div>
  )
}

export default userInput;