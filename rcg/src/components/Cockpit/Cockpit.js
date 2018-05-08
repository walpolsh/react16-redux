import React from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';
  if(props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = red
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = red, bold
  }

  return (
    <div className={classes.Cockpit}>  
      <h1>Title</h1>
      <p className={assignedClasses.join(' ')}>Click the button for the list of people</p>
      <button 
        onClick={props.clicked}
        className={btnClass}> Toggle Persons</button>
    </div>
  )
};

export default cockpit;