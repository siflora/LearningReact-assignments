import styles from './App.module.css';

import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {

state= {
    persons: [
        { id:'sjdgl', name:'Flora', age:'19' },
        { id:'lkgjsd', name:'Per', age:'20' },
        { id:'oquwt', name:'Kana', age:'21' }
    ],
    showPersons: false
};


deletePersonHandler = (personIndex) => {
	const persons = [...this.state.persons];
	persons.splice(personIndex, 1);
	this.setState({persons: persons});
}

nameChangedHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex(p=> {
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

togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
}

render() {

  let persons = null;
  let btnClass = '';

  if(this.state.showPersons) {
      persons = (
        <div>
		    {this.state.persons.map((person, index)=> {
		    	return <Person
		    	name={person.name}
		    	age={person.age}
		    	click={() => this.deletePersonHandler(index)}
		    	key={person.id}
                changed={(event)=>this.nameChangedHandler(event, person.id)}/>
		    })
		    };
        </div>
      )
    btnClass = styles.Red;
  }

  const classes = [];
  if(this.state.persons.length <= 2) {
      classes.push(styles.red)
  };
  if(this.state.persons.length <= 1) {
      classes.push(styles.bold)
  }

  return (
    <div className={styles.App}>
      <h1>Hello World!</h1>
      <p className={classes.join(' ')}>Show me how it works!</p>
      <button
      className={btnClass}
      onClick={this.togglePersonsHandler}>
      Toggle Persons</button>
      {persons}
    </div>
  );
}
}

export default App;
