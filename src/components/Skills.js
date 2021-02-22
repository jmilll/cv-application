import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import Overview from './Overview';

class Skills extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: "",
            tasks: [],
        };
    }
  
    handleChange = (e) => {
      
      console.log(e.target.value)
  
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
            <div className='container skills'> 

                <SectionHeader name='Sofware Knowledge + Skills'/>
                
                <form onSubmit={this.onSubmitTask}>
                {/* <label htmlFor="taskInput">Enter Skill</label> */}

                <input 
                    onChange={this.handleChange}
                    value={this.state.task}
                    type="text" 
                    id="taskInput" 
                    placeholder= 'Team Player'
                />

                <button className='btn' type="submit">Add Skill</button>
                </form>
                <Overview tasks={tasks} />
            </div>
        )
    }
}

export default Skills
