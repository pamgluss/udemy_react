import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

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
    showNames: false
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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inhert',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

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
    }

    let UserOutputs = (
      this.state.usernames.map((usernames) => {
        return( <UserOutput username={usernames} />)
      })
    )
    return (
      <div className='App'>
        <div className='assignment1'>
          {UserOutputs}
          <UserInput change={this.usernameChangeHandler}/>
        </div>
        <div className='basics'>
          <h1>Pam's Great React App</h1>
          <p onClick={() => this.switchNameHandler('Edward')}>Hello world!</p>
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
