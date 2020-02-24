import React from 'react';
import Students from './components/students';

class App extends React.Component {
  state = {
    students: [
      { name: 'Alapakam', age: '24' },
      { name: 'Dorababu', age: '25' },
      { name: 'Suresh', age: '25' },
      { name: 'Devendra', age: '26' },
    ]
  }
  render() {
    return (
      <div className="App" >
        <Students students={this.state.students} />
      </div>
    );
  }
}

export default App;
