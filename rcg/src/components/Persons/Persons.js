import React, {PureComponent} from 'react';

import Person from './Person/Person';

//functional component
class Persons extends PureComponent {
    constructor (props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
    }
  
    componentWillMount() {
      console.log('[Persons.js] componentWillMount()')
    }
  
    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount()')
    }
  
    componentWillReceiveProps(nextProps) {
      console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps)
    }
  
    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState)
    //   return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked; 
    //   //only re-render if props changed
    //     // return true;
    // }
    
    componentWillUpdate (nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate () {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');

    }

    render () {
        console.log('[Persons.js] inside render()');
        return  this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                click={() => this.props.clicked(index)} 
                name={person.name} 
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)} 
              />
        });
    }
}

export default Persons;