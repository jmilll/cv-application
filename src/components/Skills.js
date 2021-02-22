import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import SkillsItem from './SkillsItem';

class Skills extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: "",
            tasks: [],
        };
    }
  
    handleChange = (e) => {
      
      //console.log(e.target.value)
  
      this.setState({
        task: e.target.value,
      })
    }
  
    onSubmitTask = (e) => {
      e.preventDefault();
  
      this.setState({
        tasks: this.state.tasks.concat(this.state.task), 
        task: "",
      });

    }


    render() {
        const { task, tasks } = this.state;
        
        return (
            <div className='container skills'> 

                <SectionHeader name='Sofware Knowledge + Skills'/>
                
                <form className='form-skills' onSubmit={this.onSubmitTask}>
                {/* <label htmlFor="taskInput">Enter Skill</label> */}

                    <input 
                        onChange={this.handleChange}
                        value={this.state.task}
                        type="text" 
                        id="taskInput" 
                        placeholder= 'JavaScript'
                    />

                    <button className='btn add-skill' type="submit">Add Skill</button>
                </form>

                <SkillsItem tasks={tasks} />

            </div>
        )
    }
}

export default Skills
