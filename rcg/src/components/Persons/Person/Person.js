import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types'


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
      if (this.props.position === 0) {
        this.inputElement.focus();
      }
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Person.js] Inside componentWillReceiveProps', nextProps)
  }

  render () {
    console.log('[Person.js] inside render()');
    return (
      <Aux>
        <p onClick={this.props.click}>hey hey hey I'm {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p> 
        <input 
          ref={(el) => { this.inputElement = el }}
          type='text' 
          onChange={this.props.changed} 
          value={this.props.name}/>
      </Aux>
    )
  }
}
 
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);