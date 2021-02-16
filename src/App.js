import React, { Component } from "react";
import ClassClick from "./components/ClassClick";
import Education from "./components/Education";
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault();

    //console.log("before " + this.state.task)

    this.setState({
      tasks: this.state.tasks.concat(this.state.task), 
      task: "",
    });

    //console.log("after " + this.state.task)
  }





  render() {
    const { task, tasks } = this.state;



    return (
      <div>
        <ClassClick />
        
        <Education />

        <h1 />
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>

          <input 
            onChange={this.handleChange}
            value={this.state.task}
            type="text" 
            id="taskInput" 
          />

          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}


export default App;

/*
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    
    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count +1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.countUp}>Click Me!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}


export default App;
*/


/*
import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';


// EXAMPLE to illustrate props

class DemoComponent extends React.Component{
	render(){
		return(

				<div>
					<h2>Hello {this.props.user}</h2>
					<h3>Welcome to GeeksforGeeks</h3>
				</div>
			);
	}
}

function DemoComponent(props){
  return(
      <div>
          <h2>Hello {props.user}</h2>
          <h3>Welcome to GeeksforGeeks</h3>
       </div>
  );
}


ReactDOM.render(
	// passing props
	<DemoComponent user = "Jay M" />, 
	document.getElementById("root")
);
*/

//INHERIT EXAMPLE
/*
import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';


// Parent Component
class Parent extends React.Component{
  render(){
      return(
              <div>
                  <h2>You are inside Parent Component</h2>
                  <Child name="User" userId = "55566"/>
              </div>
          );
  }
}

// Child Component
class Child extends React.Component{
  render(){
    console.log(this.props);
      return(
              <div>
                  <h2>Hello, {this.props.name}</h2>
                  <h3>You are inside Child Component</h3>
                  <h3>Your user id is: {this.props.userId}</h3>
              </div>
          );
  }
}

ReactDOM.render(
  // passing props
  <Parent />, 
  document.getElementById("root")
);

export default Parent;
*/

/* default react app

import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
