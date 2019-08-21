import React from 'react';
import styledClasses from '../../App.css';

const PeopleToggleButton = (props) => {
  let btnClass = '';
  if( props.showName ){
    btnClass = styledClasses.red;
  }
  return(
    <button className={btnClass}
      onClick={props.clicked}
    >Toggle People</button>
  )

}

export default PeopleToggleButton;