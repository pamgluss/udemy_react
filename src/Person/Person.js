import React from 'react';
import './Person.css';

const person = (props) => {
  return(
    <div className='Person'>
      <h2 onClick={props.click}>I'm {props.name}</h2>
      <p>I am {props.age} years old.</p>
      <p>{props.children}</p>

      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person