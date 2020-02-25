import React, { Component } from 'react';

class AddStudent extends Component {
    state = {
        name: null,
        age: null
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitHangler = (e) => {
        e.preventDefault();
        this.props.addStudent(this.state)

    }
    render() {
        return (
            <form onSubmit={this.submitHangler}>
                Name:<input type="text" id="name" onChange={this.changeHandler} />
                Age:<input type="text" id="age" onChange={this.changeHandler} />
                <button>Add Student</button>
            </form>
        );
    }
}

export default AddStudent;