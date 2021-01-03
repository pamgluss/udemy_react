import React from 'react';
import CharBox from './CharBox';

const CharBoxes = (props) => props.char_array.map((letter, index) => {
  return <CharBox 
      letter={letter}
      click={() => props.deleteChar(index)}
      key={index} />
});

export default CharBoxes;