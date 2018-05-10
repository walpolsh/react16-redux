import React, { PureComponent } from 'react';
import classes from  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor (props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: '1',name: 'Paul', age: 29 },
        { id: '21',name: 'Cindy', age:100},
        { id: '14',name: 'Glenn', age:200}
      ],
      showPersons: false
    };
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount()')
  }
  
  componentDidMount() {
    console.log('[App.js] inside componentDidMount')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons
  // }
  
  componentWillUpdate (nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate () {
      console.log('[UPDATE App.js] Inside componentDidUpdate');

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
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //slice copies the old array so we don't mutate the original state.
    const persons = [...this.state.persons]//spreads array items into new array
    persons.splice(personIndex, 1);//we splce the copied persons array at the provided index
    this.setState({persons: persons}); 
  }
  
  togglePersonsHandler = () => { //this syntax ensures 'this' always refers to this class ^
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow}) // if doesShow is false, set to true
    
  }

  render() {
    console.log('App.js, inside Render()')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}} > Show Persons</button>
        <Cockpit
          appTitle={this.props.title} 
          showPersons={this.state.showPersons} 
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}/>
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
