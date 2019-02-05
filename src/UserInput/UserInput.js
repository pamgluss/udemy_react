import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return(
    <div className='userInput'>
      <p>Change usernames, separate with a space</p>
      <input className='inputBox' type='text' onChange={props.change} value={props.username}/>
    </div>
  )
}

export default userInput;