import React, { Component } from 'react'
import uniqid from "uniqid";

class FormEducation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: {uniqid},
            school: '',
            degree: '',
            from: '',
            to: '',
            additional: '',

        }
    }
    
    handleChange = (e) => {
        this.setState({
            
          //task: e.target.value,
        })
        console.log('handle change')
      }

    onSubmitTask = (e) => {
        e.preventDefault();

        //console.log("before " + this.state.task)

        this.setState({
            //tasks: this.state.tasks.concat(this.state.task), 
            //task: "",
        });

        console.log('submit task')
        //console.log("after " + this.state.task)
    }

    //pulls task from the props to reference below
    //const { tasks } = props;
    //{tasks.map((task) => {
        //return <li key={uniqid()}>{task}</li>

    render() {
        return (
            <form 
                className='education-form hidden'
                onSubmit={this.onSubmitTask}
            >

                <div className='form-section'>
                    <label htmlFor='school-input'>School</label>
                    <input 
                        //onChange={this.handleChange}
                        //value={this.state.school}
                        type='text'
                        id='school-input' 
                        placeholder='Enter School'
                        required
                    />
                </div>

                <div className='form-section'>
                    <label htmlFor='degree-input'>Degree</label>
                    <input 
                        //onChange={this.handleChange}
                        //value={this.state.degree}
                        type='text'
                        id='degree-input'
                        placeholder='Enter Degree'
                        required
                    />
                </div>

                <div className='form-section'>
                    <label htmlFor='year-from'>From</label>
                    <input 
                        //onChange={this.handleChange}
                        //value={this.state.from}
                        //type="month"
                        type='number'
                        min='1940'
                        max='2100'
                        step='1'
                        id='year-from'
                        placeholder='YYYY'
                    />
                </div>

                <div className='form-section'>
                    <label htmlFor='year-to'>To</label>
                    <input 
                        //onChange={this.handleChange}
                        //value={this.state.to}
                        //type="month"
                        type='number'
                        min='1940'
                        max='2100'
                        step='1'
                        id='year-to'
                        placeholder='YYYY'
                    />
                </div>

                <div className='form-section'>
                    <label htmlFor='degree-input'>Additional</label>
                    <textarea 
                        //onChange={this.handleChange}
                        //value={this.state.additional}
                        type='text'
                        id='school-add'
                        placeholder='Honors / Clubs / Acheivements'
                    />
                </div>

                <div className='form-btns'>
                    <button type='submit' className='submit-btn'>Add School</button>
                    <button type='cancel' className='cancel-btn'>Cancel</button>
                </div>



            </form>
        )
    }
}

export default FormEducation
