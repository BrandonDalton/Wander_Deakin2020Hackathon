import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.scss';
import ListContainer from './ListContainer';

class Goal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div className="homePage--goalSection">
        <div className="goalSection--goalContainer">
          <h1>To-Do List</h1>
        </div>
        <div className="goalSection--toDoControls">
          <div className="goalSection--inputContainer">
            <TextField label="New task" value={this.state.term} onChange={this.onChange} />
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={this.onSubmit}>Add task</Button>
          </div>
        </div>
        <div className="goalSection--toDoList">
          <ListContainer items={this.state.items} />
        </div>
      </div>
    )
  }
}

export default Goal;