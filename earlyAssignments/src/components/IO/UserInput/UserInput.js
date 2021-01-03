import React, { useEffect, useRef } from 'react';
import cssClasses from './UserInput.css';

const UserInput = props => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    inputRef.current.style.width = '25%';
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  return(
    <div className={cssClasses.userInput}>
      <p>Change usernames, separate with a space</p>
      <input 
        className={cssClasses.inputBox}
        ref={inputRef}
        type='text' 
        onChange={props.change} 
        value={props.username}
      />
    </div>
  )
}

export default React.memo(UserInput);