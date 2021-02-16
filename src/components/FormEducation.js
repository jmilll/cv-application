import React, { Component } from 'react'

class FormEducation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className='education-form hidden'>

                <div className='form-section'>
                    <label htmlFor='school-input'>School</label>
                    <input 
                        //onChange={this.handleChange}
                        //value={this.state.task}
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
                        //value={this.state.task}
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
                        //value={this.state.task}
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
                        //value={this.state.task}
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
                        //value={this.state.task}
                        type='text'
                        id='school-add'
                        placeholder='Honors / Clubs / Acheivements'
                    />
                </div>

                <div className='form-btns'>
                    <button type='submit' className='submit-btn'>Add School</button>
                    <button type='cancel' className='cancel-btn'>Cancel</button>
                </div>



            </div>
        )
    }
}

export default FormEducation
