import React from 'react';
import UserOutput from './UserOutput/UserOutput';

const OutputList = (props) => props.usernames.map((usernames, index) => {
    return <UserOutput 
            username={usernames}
            key={index} 
          />
  });

export default OutputList;