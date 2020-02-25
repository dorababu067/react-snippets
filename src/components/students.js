import React, { Component } from 'react';


class Students extends Component {

    handleDelete = (e) => {
        this.props.deleteStudent(e.target.id)
    }
    render() {
        const { students } = this.props
        let student = students.map(stu => {
            return (<li key={stu.id}>
                {stu.name}, {stu.age}
                <button onClick={this.handleDelete} id={stu.id}>Delete</button>
            </li>)
        })
        console.log(student)
        return (
            <ul>
                {student}
            </ul>
        );
    }
}

export default Students;
