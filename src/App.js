import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharBox from './CharBox/CharBox';

class App extends Component {
  state = {
    persons: [
      { id: 0, name: 'Max', age: 28},
      { id: 1, name: 'Pam', age: 25},
      { id: 2, name: 'Kara', age: 26},
      { id: 3, name: 'Nicole', age: 25}
    ],
    usernames: [
      'pgluss11',
      'klewis15'
    ],
    showNames: false,
    textLength: 0,
    textValue: ''
  }

  toggleNamesHandler = () => {
    const name_state = this.state.showNames;
    this.setState({
      showNames: !name_state
    });
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  usernameChangeHandler = (event) => {
    let new_usernames = event.target.value.split(' ');
    this.setState({
      usernames: [
        new_usernames[0],
        new_usernames[1]
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  calculateLengthHandler = (event) => {
    this.setState({
      textLength: event.target.value.length,
      textValue: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    const stateChars = [...this.state.textValue];
    stateChars.splice(index, 1);
    this.setState({
      textValue: stateChars
    })
  }

  render() {
    const style = {
      backgroundColor: '#1abc1a',
      color: 'white',
      font: 'inhert',
      border: '1px solid #0a5b0a',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'green',
        color: 'black'
      }
    };

    let classes = [];
    if( this.state.persons.length < 3 ){
      classes.push('red');
    }
    if( this.state.persons.length < 2 ){
      classes.push('bold');
    }

    let persons = null;
    if ( this.state.showNames ){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return(
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler( event, person.id )} />)
          })}
        </div>
      )
      style.backgroundColor='red'
      style.border = '1px solid black'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    let UserOutputs = (
      this.state.usernames.map((usernames, index) => {
        return( <UserOutput 
          username={usernames}
          key={index} />)
      })
    )

    let charBoxes = null;
    if ( this.state.textValue.length > 0){
      let char_array = [...this.state.textValue];
      charBoxes = (
        <div>
          {char_array.map((letter, index) => {
            return(
              <CharBox 
              letter={letter}
              click={() => this.deleteCharHandler(index)}
              key={index} />
            )
          })}
        </div>
      )
    }

    return (
        <div className='App'>
          <div className='assignment2'>
            <h1>Assignment 2:</h1>
            <textarea 
              onChange={this.calculateLengthHandler}
              value={[...this.state.textValue].join('')}
            ></textarea>
            <ValidationComponent textLength={this.state.textLength} />
            {charBoxes}
            <hr />
          </div>
          <div className='assignment1'>
            {UserOutputs}
            <UserInput change={this.usernameChangeHandler}/>
          </div>
          <div className='basics'>
            <h1>Pam's Great React App</h1>
            <p className={classes.join(' ')}>Hello world!</p>
            <button 
              style={style}
              onClick={this.toggleNamesHandler}
            >Toggle People</button>
            {persons}
          </div>
        </div>
    );
  }
}

export default App;
