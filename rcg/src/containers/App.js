import React, { Component } from 'react';
import classes from  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '1',name: 'Paul', age: 29 },
      { id: '21',name: 'Cindy', age:100},
      { id: '14',name: 'Glenn', age:200}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //slice copies the old array so we don't mutate the original state.
    const persons = [...this.state.persons]//spreads array items into new array
    persons.splice(personIndex, 1);//we splce the copied persons array at the provided index
    this.setState({persons: persons}); 
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

      const person = {
        ...this.state.persons[personIndex]
      }

      person.name = event.target.value;

      const persons = [...this.state.persons]
      persons[personIndex] = person

      this.setState({persons: persons})
  }

  togglePersonsHandler = () => { //this syntax ensures 'this' always refers to this class ^
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow}) // if doesShow is false, set to true
    
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
    }

    return (
        <div className={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons} 
            persons={this.state.persons} 
            clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;
