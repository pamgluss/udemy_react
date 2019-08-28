import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return(
    <div className='userOutput'>
      <p>Username:</p>
      <p className='username'>{props.username}</p>
    </div>
  )
}
export default userOutput;