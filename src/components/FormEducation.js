import React, { Component } from 'react'
import uniqid from "uniqid";

import CardItem from './CardItem'

class FormEducation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            eduObject: {
                id: uniqid(),
                school: '',
                degree: '',
                from: '',
                to: '',
                additional: '',
            },
            cards: [],
            // id: {uniqid},
            // school: '',
            // degree: '',
            // from: '',
            // to: '',
            // additional: '',
            // cards: [],
            // card: '',

        }
    }
    
    handleChange = (e) => {
        const {name, value} = e.target 
        //const  { eduObject } = this.state
        //console.log([name], value)
        
        //console.log(e.target.name)
        //console.log(e.target.id)
        //console.log(e.target.value)
        this.setState({
            //eduObject.[name] : value}
          //eduObject: {[name]: value}
          //eduObject: { [name]: value }
          eduObject: {...this.state.eduObject, [name]: value}
          //card: e.target.value,

        })
        //console.log(e.target.value)
        //console.log('handle change' + this.state)
        console.log(this.state.eduObject)
        //console.log(Object.keys(this.state.eduObject))
      }

    onSubmitTask = (e) => {
        e.preventDefault();

        // alert(`
        //     ${this.state.eduObject.school} ${this.state.eduObject.degree}
        // `)

        this.setState({
            cards: this.state.cards.concat(this.state.eduObject), 
            //eduObject: {school: 'value'}
            
        });

        console.log("after " + this.state.cards)
        //console.log("after " + this.state.task)
    }

    //pulls task from the props to reference below
    //const { tasks } = props;
    //{tasks.map((task) => {
        //return <li key={uniqid()}>{task}</li>

    handleChangeSchool = (e) => {
        this.setState({
            eduObject: {school: e.target.value}
        })
        console.log(this.state.eduObject)
    }
        
    render() {


        return (
        <div className='testing'>   
            
            <CardItem section='education' eduObject={this.state.cards} />

            <form 
                className='education-form hidden'
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
        </div> 
        )
    }
}

export default FormEducation


/*            <form 
                className='education-form hidden'
                onSubmit={this.onSubmitTask}
            >

                <div className='form-section'>
                    <label htmlFor='school-input'>School</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.school}

                        type='text'
                        //name='school'
                        id='school-input' 
                        placeholder='Enter School'
                        required
                    />
                </div>

                <div className='form-section'>
                    <label htmlFor='degree-input'>Degree</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.degree}

                        type='text'
                        //name='degree'
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
            */ 
