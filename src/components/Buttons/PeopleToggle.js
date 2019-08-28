import React from 'react';
import styledClasses from '../../App.css';
import withClassier from '../hoc/withClassier';

let btnClass = '';

const PeopleToggleButton = (props) => {
  
  if( props.showName ){
    btnClass = styledClasses.red;
  }
  return(
    <button onClick={props.clicked}>
      Toggle People
    </button>
  )

}

export default withClassier(PeopleToggleButton, btnClass);