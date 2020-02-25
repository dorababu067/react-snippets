import React from 'react';
import Students from './components/students';
import AddStudents from './components/add-students';

class App extends React.Component {
  state = {
    students: [
      { id: 1, name: "Alapakam", age: 24 },
      { id: 2, name: "DoraBabu", age: 25 },
      { id: 3, name: "Suresh", age: 25 },

    ]
  }
  addStudent = (student) => {
    student.id = this.state.students.length + 1
    let students = [...this.state.students, student]
    this.setState({ students })

  }

  deleteStudent = (id) => {
    let students = this.state.students.filter(student => student.id != id)
    this.setState({ students })
  }

  render() {
    return (
      <div className="Students" >
        <Students students={this.state.students} deleteStudent={this.deleteStudent} />
        <AddStudents addStudent={this.addStudent} />
      </div>
    );
  }
}

export default App;
