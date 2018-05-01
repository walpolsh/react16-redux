import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Paul', age: 29 },
      { name: 'Cindy', age:100},
      { name: 'Glenn', age:200}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!')
    this.setState({   persons: [
        { name: newName, age: 59 },
        { name: 'Randy', age:120},
        { name: 'Arnold', age:300}
      ]
    })
  }

  nameChangedHandler = (event) => {
      this.setState({   persons: [
        { name: 'Paul', age: 29 },
        { name: event.target.value, age:100},
        { name: 'Glenn', age:200}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <button onClick={() => this.switchNameHandler('Dave')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Indy')} changed={this.nameChangedHandler} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I like to eat Kraft Dinner</Person>

      </div>
    );
  }
}

export default App;
