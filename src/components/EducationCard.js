import uniqid from "uniqid";
import React, { Component } from 'react'

class EducationCard extends Component {
    constructor(props) {
        super(props)
        this.testFunction = props.testFunction.bind(this)
        //this.editCard = props.editCard.bind(this)
        this.deleteCard = props.deleteCard.bind(this)
        
        this.state = {
            newCard: {
                id: props.card.id,
                school: props.card.school,
                degree: props.card.degree,
                from: props.card.from,
                to: props.card.to,
                additional: props.card.additional,
            },
            activeEditForm: false,
            activeEditBtn: true,
        }
    }


    onSubmitTask = (e) => {
        e.preventDefault();
        console.log('submited')
    }

    handleChange = (e) => {
        //changes DOM directly
        // this.setState({
        //     newCard: {school: e.target.value}
        // })

        const {name, value} = e.target 
        this.setState({
          newCard: {...this.state.newCard, [name]: value}

        })
    }

    toggleEditForm = () => {
        this.setState({
            activeEditBtn: !this.state.activeEditBtn,
            activeEditForm: !this.state.activeEditForm
        })
    }

    render() {

        //const { section, card, deleteCard, editCard , testFunction} = props;
        const activeEditForm = this.state.activeEditForm ? 'card-edit' : 'card-edit hidden'
        const activeEditBtn = this.state.activeEditBtn ? 'btn edit' : 'btn edit hidden'
        const activecardItem = this.state.activeEditBtn ? 'card-item' : 'card-item hidden'

        return (

        // <React.Fragment></React.Fragment>
        <section className='card-container'>
            <div className={activecardItem}>
                <div className='card-info'>
                <p className='hidden'>{this.state.newCard.id}</p>

                <div className='school-info'>
                    <h5>{this.state.newCard.school}</h5>
                    <p className='degree'>{this.state.newCard.degree}</p>
                </div>
                <div className='years'>
                    <p>{this.state.newCard.from} to {this.state.newCard.to}</p>
                </div>
                <div className='additional edu'>
                    <p className='add-text'>{this.state.newCard.additional}</p>
                </div>
            </div>
            <div className='card-btns'>
                <button className={activeEditBtn} type='button' onClick={() => this.toggleEditForm()}>Edit card</button>
                <button className='btn delete' type='button' onClick={() => this.deleteCard(this.state.newCard.id)}>Delete card</button>
            </div>
            </div>





            <form className={activeEditForm} onSubmit={this.onSubmitTask}>
                <div className='form-section'>
                    {/* <label htmlFor='school'>SCHOOL EDIT</label> */}
                    <input 
                        
                        value={this.state.newCard.school}
                        onChange={this.handleChange}

                        type='text'
                        name='school'
                        placeholder='Edit School'
                        required
                    />
                </div>
                <div className='form-section'>
                    {/* <label htmlFor='degree'>DEGREE EDIT</label> */}
                    <input 
                        
                        value={this.state.newCard.degree}
                        onChange={this.handleChange}

                        type='text'
                        name='degree'
                        placeholder='Edit Degree'
                        required
                    />
                </div>

                <div className='form-section'>
                    {/* <label htmlFor='year-from'>From</label> */}
                    <input 
                        onChange={this.handleChange}
                        value={this.state.newCard.from}

                        //type="month"
                        type='number'
                        name='from'
                        min='1940'
                        max='2100'
                        step='1'
                        placeholder='From yyyy'
                    />
                </div>

                <div className='form-section'>
                    {/* <label htmlFor='year-to'>To</label> */}
                    <input 
                        onChange={this.handleChange}
                        value={this.state.newCard.to}

                        //type="month"
                        type='number'
                        name='to'
                        min='1940'
                        max='2100'
                        step='1'
                        placeholder='To yyyy'
                    />
                </div>

                <div className='form-section'>
                    {/* <label htmlFor='degree-input'>Additional</label> */}
                    <textarea 
                        onChange={this.handleChange}
                        value={this.state.newCard.additional}

                        type='text'
                        name='additional'
                        placeholder='Honors / Clubs / Acheivements'
                    />
                </div>





                <button className='btn save' type='submit' onClick={() => this.toggleEditForm()}>Save Edit</button>
            </form>
        </section>
        )
    }
}

export default EducationCard