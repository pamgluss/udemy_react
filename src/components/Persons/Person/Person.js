import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Person.css';

class Person extends PureComponent {
  constructor(props){
    super(props);
    this.headingElementRef = React.createRef();
  }
  componentDidMount(){
    this.inputElement.focus();
    this.headingElementRef.current.style.color = '#0099ff';
  }

  render(){
    return(
      <div className='Person'>
        <h2 onClick={this.props.click} ref={this.headingElementRef}>
          I'm {this.props.name}
        </h2>
        <p>I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
  
        <input 
          type='text'
          ref={(i) => {this.inputElement = i}}
          onChange={this.props.changed} 
          value={this.props.name} 
        />
      </div>
    );
  }

}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default Person;