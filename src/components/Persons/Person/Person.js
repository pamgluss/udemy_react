import React, { PureComponent } from 'react';
import './Person.css';

class Person extends PureComponent {
  render(){
    return(
      <div className='Person'>
        <h2 onClick={this.props.click}>I'm {this.props.name}</h2>
        <p>I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
  
        <input type='text' onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }

}

export default Person;