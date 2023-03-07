import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTask } from '../store/tasks';

class AddTasksClass extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(this.props);
    this.setState({ task: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.addNewTask({
      task: this.state.task,
    });
    this.setState({ task: '' });
  }

  render() {
    return (
      <>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.task}
            placeholder='Enter a new task...'
            onChange={this.handleChange}
          />
          <button type='submit'>Add task</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (task) => dispatch(addNewTask(task)),
});

export default connect(null, mapDispatchToProps)(AddTasksClass);
