import React from 'react';
import styledClasses from '../../App.css';

const Introduction = (props) => {
  let assignedClasses = [];
  if( props.personsLength < 3 ){
    assignedClasses.push(styledClasses.red);
  }
  if( props.personsLength < 2 ){
    assignedClasses.push(styledClasses.bold);
  }

  return(
    <div className={props.assignmentName}>
      <h1>{props.heading}</h1>
      <p className={assignedClasses.join(' ')}>{props.message}</p>
    </div>
  );
}

export default React.memo(Introduction);