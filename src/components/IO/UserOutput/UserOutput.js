import React from 'react';
import cssClasses from './UserOutput.css';

const userOutput = (props) => {
  return(
    <div className={cssClasses.userOutput}>
      <p>Username:</p>
      <p className={cssClasses.username}>{props.username}</p>
    </div>
  )
}
export default userOutput;