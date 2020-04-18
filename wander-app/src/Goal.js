import React from 'react';
import './App.scss';
import List from './list';


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
           To-Do Controls
           <form className="App">
            <input value={this.state.term} onChange={this.onChange} />
                <div className="button" onClick={this.onSubmit}>Submit</div>
            </form>
         </div>
         <div className="goalSection--toDoList">
        <List items={this.state.items} />
         </div>
     </div>
      )
     
  }
  }
  
  export default Goal;