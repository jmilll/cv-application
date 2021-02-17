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
        className='education-form hidden'
        onSubmit={this.onSubmitTask}
    >

        <div className='form-section'>
            <label htmlFor='school-input'>School</label>
            <input 
                //onChange={this.handleChange}
                value={school}
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
                value={degree}

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
                //value={info.from}

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
                //value={info.to}

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
                //value={info.additional}

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

export default FormEducation2
