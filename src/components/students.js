import React from 'react';

function Students(props) {
    const { students } = props
    const studentList = students.map(student => {
        return (<h1>Welcome {student.name} your age is {student.age} </h1>)
    })
    return (
        <div className="App">
            {studentList}
        </div>
    );
}

export default Students;
