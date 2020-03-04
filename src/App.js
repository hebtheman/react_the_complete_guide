import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
   state = {
    persons: [
          { id: 'asdda', name: 'Matt', age: 32 },
          { id: 'ffdgger', name: 'Dave', age: 33 },
          { id: 'ghfghgf', name: 'Teresa', age: 30 }
        ],
        otherState: 'Some other value',
        showPersons: false
   }

    nameChangeHandler = (event) => {
      this.setState({   
        persons: [
          { name: 'Matthew', age: 32 },
          { name: event.target.value, age: 33 },
          { name: 'T', age: 30 }
        ],
      } );
    }

    deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons]
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
    }

    render () {

      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }

      let persons = null

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id} />
            })}
          </div>
        );
      }

    return (
      <div className="App">
        <h1>Hi I'm a React App!</h1>
        <p>This is really working!</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

  };
    //  return React.createElement('div', {className:'App'} , React.createElement('h1', null, 'Hi I\'m a React app!!!'))
}

export default App;

// USING
// const app = props => {
//   const [ personsState, setPersonsState ] = useState({
//    persons: [
//          { name: 'Matt', age: 32 },
//          { name: 'Dave', age: 33 },
//          { name: 'Teresa', age: 30 }
//        ],
//   });

//   const [otherState, setOtherState] = useState('Some other value')

//   console.log(personsState, otherState)

//   const switchNameHandler = () => {
//       console.log('was clicked')
//      // DON'T do this! this.state.persons[0].name = 'Matthew'
//      setPersonsState({   
//        persons: [
//          { name: 'Matthew', age: 32 },
//          { name: 'David', age: 33 },
//          { name: 'T', age: 30 }
//        ],
//        otherState: personsState.otherState
//      });
//    }

//    return (
//      <div className="App">
//        <h1>Hi I'm a React App!</h1>
//        <p>This is really working!</p>
//        <button onClick={switchNameHandler}>Switch Name</button>
//        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}  />
//        <Person name={personsState.persons[1].name}  age={personsState.persons[1].age} > My hobbies: Running </Person>
//        <Person name={personsState.persons[2].name}  age={personsState.persons[2].age}  />
//      </div>
//    );
   //  return React.createElement('div', {className:'App'} , React.createElement('h1', null, 'Hi I\'m a React app!!!'))
//  }


// export default app;


