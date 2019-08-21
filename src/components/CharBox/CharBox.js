import React from 'react';
import cssClasses from './CharBox.css'

const CharBox = (props) => {
  return(
    <div className={cssClasses.CharBox} onClick={props.click}>
      {props.letter}
    </div>
  )
}

export default CharBox;