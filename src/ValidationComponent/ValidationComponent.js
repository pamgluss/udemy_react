import React from 'react';
import Radium from 'radium';

const ValidationComponent = (props) => {
  const style = {
    '@media (mid-width: 500px)': {
      width: '450px'
    }
  }
  let validationText = ( <p>Text is short.</p>);
  if(props.textLength > 8){
    validationText = (
      <p>Text is long.</p>
    );
  } else if(props.textLength === 0){
    validationText = (
      <p>Type something in the box.</p>
    );
  }
  return(
    <div style={style}>
      {validationText}
    </div>
  )
}

export default Radium(ValidationComponent);