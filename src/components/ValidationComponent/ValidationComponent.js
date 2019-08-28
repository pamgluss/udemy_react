import React from 'react';
import Aux from '../hoc/aux';

const ValidationComponent = (props) => {
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
    <Aux>
      {validationText}
    </Aux>
  )
}

export default React.memo(ValidationComponent);