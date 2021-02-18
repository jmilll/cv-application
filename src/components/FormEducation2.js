import React, { Component } from 'react'
import uniqid from "uniqid";



    //pulls task from the props to reference below
    //const { tasks } = props;
    //{tasks.map((task) => {
        //return <li key={uniqid()}>{task}</li>
const FormEducation2 = (props) => {
    const { school, degree} = props;



    return (
        <form 
        className='education-form2 hidden'
        onSubmit={this.onSubmitTask}
    >

        <div className='form-section'>
            <label htmlFor='school'>School</label>
            <input 
                
                value={this.state.school}
                onChange={this.handleChange}

                type='text'
                name='school'
                placeholder='Enter School'
                required
            />
        </div>

        <div className='form-section'>
            <label htmlFor='degree'>Degree</label>
            <input 
                onChange={this.handleChange}
                value={this.state.degree}

                type='text'
                name='degree'
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
                name='from'
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
                name='to'
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
                name='additional'
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

export default FormEducation2
