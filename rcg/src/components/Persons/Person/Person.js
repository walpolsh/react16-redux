import React, {Component} from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
  constructor (props) {
      super(props);
      console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] componentWillMount()')
  }

  componentDidMount() {
      console.log('[Person.js] inside componentDidMount()')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Person.js] Inside componentWillReceiveProps', nextProps)
  }

  render () {
    console.log('[Person.js] inside render()');
    return (
      <WithClass classes={classes.Person}>
        <p onClick={this.props.click}>hey hey hey I'm {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p> 
        <input type='text' onChange={this.props.changed} value={this.props.name}/>
      </WithClass>
    )
  }
}

export default Person;