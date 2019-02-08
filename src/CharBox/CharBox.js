import React from 'react';
import './CharBox.css'

const CharBox = (props) => {
  return(
    <div className='CharBox' onClick={props.click}>
      {props.letter}
    </div>
  )
}

export default CharBox;