import uniqid from "uniqid";
import React, { Component } from 'react'

class PracticalExperienceCard extends Component {
    constructor(props) {
        super(props)
        //this.editCard = props.editCard.bind(this)
        this.deleteCard = props.deleteCard.bind(this)
        
        this.state = {
            newCard: {
                id: props.card.id,
                company: props.card.company,
                city: props.card.city,
                state: props.card.state,
                title: props.card.title,
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
        //     newCard: {company: e.target.value}
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

                <div className='company-info'>
                    <h5>{this.state.newCard.company}</h5>
                    <p className='title'>{this.state.newCard.title}</p>
                </div>
                <div className='location'>
                    <p className='city'>{this.state.newCard.city}</p>
                    <p className='state'>, {this.state.newCard.state}</p>
                </div>
                <div className='years'>
                    <p>{this.state.newCard.from} to {this.state.newCard.to}</p>
                </div>
                <div className='additional exp'>
                    <p className='add-text'>{this.state.newCard.additional}</p>
                </div>
            </div>
            <div className='card-btns'>
                <button className={activeEditBtn} type='button' onClick={() => this.toggleEditForm()}>Edit</button>
                <button className='btn delete' type='button' onClick={() => this.deleteCard(this.state.newCard.id)}>Delete</button>
            </div>
            </div>





            <form className={activeEditForm} onSubmit={this.onSubmitTask}>
                <div className='form-section h'>
                    {/* <label htmlFor='company'>company EDIT</label> */}
                    <input 
                        
                        value={this.state.newCard.company}
                        onChange={this.handleChange}

                        type='text'
                        name='company'
                        placeholder='Edit Company'
                        required
                    />
                </div>

                <div className='form-section hh'>
                    <input 
                        
                        value={this.state.newCard.city}
                        onChange={this.handleChange}

                        type='text'
                        name='city'
                        placeholder='City XX'
                        required
                    />
                </div>

                <div className='form-section hh'>
                    <input 
                        
                        value={this.state.newCard.state}
                        onChange={this.handleChange}

                        type='text'
                        name='state'
                        placeholder='State'
                        required
                    />
                </div>

                <div className='form-section h'>
                    <input 
                        
                        value={this.state.newCard.title}
                        onChange={this.handleChange}

                        type='text'
                        name='title'
                        placeholder='Edit Title'
                        required
                    />
                </div>

                <div className='form-section hh'>
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



                <div className='form-section hh'>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.newCard.to}

                        //type="month"
                        //type='number'
                        type='text'
                        name='to'
                        min='1940'
                        max='2100'
                        step='1'
                        placeholder='To yyyy'
                    />
                </div>

                <div className='form-section'>
                    <textarea 
                        onChange={this.handleChange}
                        value={this.state.newCard.additional}

                        type='text'
                        name='additional'
                        placeholder='Responsibilites / Achievements'
                    />
                </div>





                <button className='btn save' type='submit' onClick={() => this.toggleEditForm()}>Save Edit</button>
            </form>
        </section>
        )
    }
}

export default PracticalExperienceCard