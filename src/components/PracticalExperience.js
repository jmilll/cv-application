import React, { Component } from 'react'
import uniqid from "uniqid";
import SectionHeader from './SectionHeader';
import SectionFooter from './SectionFooter';
import PracticalExperienceCard from './PracticalExperienceCard';

class PracticalExperience extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            expObject: {
                id: uniqid(),
                company: '',
                city: '',
                state: '',
                title: '',
                from: '',
                to: '',
                additional: '',
            },
            cards: [],
            activeForm: false,
            activeBtn: true,
        }
    }
    
    handleChange = (e) => {
        const {name, value} = e.target 
        this.setState({
          expObject: {...this.state.expObject, [name]: value}

        })
      }

    onSubmitTask = (e) => {
        e.preventDefault();

        // alert(`
        //     ${this.state.expObject.company} ${this.state.expObject.title}
        // `)

        this.setState({
            cards: this.state.cards.concat(this.state.expObject), 
            //expObject: {company: 'value'}
            
        });

        //this.toggleForm()
        this.resetForm()
        console.log('submited')
    }


    handleChangecompany = (e) => {
        this.setState({
            expObject: {company: e.target.value}
        })
        console.log(this.state.expObject)
    }


    resetForm = (e) => {
        this.setState({
            expObject: {
                id: uniqid(),
                company: '',
                city: '',
                state: '',
                title: '',
                from: '',
                to: '',
                additional: '',
            }
        })
        this.toggleForm()
    }
       
    toggleForm = () => {
        this.setState({
            activeForm: !this.state.activeForm,
            activeBtn: !this.state.activeBtn
        })
    }

    deleteCard = (uid) => {
        console.log('delete-card')
        const remainingCards = this.state.cards.filter(card => {
            return card.id !== uid
        })
        this.setState({
            cards: remainingCards
        })
    }


    render() {

        const activeForm = this.state.activeForm ? 'form practical-exp' : 'form practical-exp hidden';
        const activeBtn = this.state.activeBtn ? 'btn add-exp' : 'btn add-exp hidden';

        const renderCard = this.state.cards.map((card) => {
            //console.log('rendercard')
            return <PracticalExperienceCard 
                    key={card.id}
                    section='practical exp'
                    card={card}
                    //editCard={this.editCard}
                    deleteCard={this.deleteCard}

                    />
        })

        return (
        <div className='container practical-exp'>   

            <SectionHeader name='Practical Experience'/>

            {renderCard}

            <form className={activeForm} onSubmit={this.onSubmitTask}>
                {/*onSubmit={this.onSubmitTask}*/}

                <div className='form-section h'>
                    <label htmlFor='company'>Company</label>
                    <input 
                        
                        value={this.state.expObject.company}
                        onChange={this.handleChange}

                        type='text'
                        name='company'
                        placeholder='Enter Company'
                        required
                    />
                </div>

                <div className='form-section hh'>
                    <label htmlFor='city'>City</label>
                    <input 
                        
                        value={this.state.expObject.city}
                        onChange={this.handleChange}

                        type='text'
                        name='city'
                        placeholder='City'
                        required
                    />
                </div>

                <div className='form-section hh'>
                    <label htmlFor='state'>State</label>
                    <input 
                        
                        value={this.state.expObject.state}
                        onChange={this.handleChange}

                        type='text'
                        name='state'
                        placeholder='XX'
                        maxLength='2'
                        required
                    />
                </div>

                <div className='form-section h'>
                    <label htmlFor='title'>Job Title</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.expObject.title}

                        type='text'
                        name='title'
                        placeholder='Enter Title'
                        required
                    />
                </div>

                <div className='form-section hh'>
                    <label htmlFor='year-from'>From</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.expObject.from}

                        //type="month"
                        type='number'
                        name='from'
                        min='1940'
                        max='2100'
                        step='1'
                        id='year-from'
                        placeholder='YYYY'
                        required
                    />
                </div>

                <div className='form-section hh'>
                    <label htmlFor='year-to'>To</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.expObject.to}

                        //type="month"
                        type='text'
                        name='to'
                        //min='1940'
                        //max='2100'
                        //step='1'
                        maxLength='7'
                        id='year-to'
                        placeholder='YYYY or Present'
                        required
                    />
                </div>

                <div className='form-section'>
                    <label htmlFor='title-input'>Additional</label>
                    <textarea 
                        onChange={this.handleChange}
                        value={this.state.expObject.additional}

                        type='text'
                        name='additional'
                        id='company-add'
                        placeholder='Responsibilites / Achievements'
                    />
                </div>

                <div className='form-btns'>
                    <button type='submit' className='btn submit' >Add Company</button>
                    <button type='cancel' className='btn cancel' onClick={this.resetForm}>Cancel</button>
                </div>
            </form>
            
            <SectionFooter activeBtn={activeBtn} toggleForm={this.toggleForm}/>

        </div> 
        )
    }
}

export default PracticalExperience