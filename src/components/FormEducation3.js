import React, { Component } from 'react'
import uniqid from "uniqid";
import SectionHeader from './SectionHeader';
import SectionFooter from './SectionFooter';
import CardItem from './CardItem'
import CardEditForm from './CardEditForm';
import CardItem2 from './CardItem2'

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
            activeForm: false,
            activeBtn: true,
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
        this.setState({
            //eduObject.[name] : value}
          //eduObject: {[name]: value}
          //eduObject: { [name]: value }
          eduObject: {...this.state.eduObject, [name]: value}
          //card: e.target.value,

        })
        //console.log(this.state.eduObject)
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

        //this.toggleForm()
        this.resetForm()
        console.log('submited')

        //console.log("after " + this.state.task)
    }


    handleChangeSchool = (e) => {
        this.setState({
            eduObject: {school: e.target.value}
        })
        console.log(this.state.eduObject)
    }


    resetForm = (e) => {
        this.setState({
            eduObject: {
                id: uniqid(),
                school: '',
                degree: '',
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

    editCard = (cardId) => {
        console.log('edit-card')
        const findCard = this.state.cards.filter(card => {
            return card.id === cardId
        })
        console.log(findCard)
        console.log(Object.findCard.school)
        const changeCard = console.log(findCard.school)
        // this.setState({
        //     eduObject: {
                
        //         school: findCard.school,
        //         degree: findCard.degree,
        //         from: findCard.from,
        //         to: findCard.to,
        //         additional: findCard.additional,
        //     }
        // })
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


    testFunction = () => {
        console.log('test')
    }


    render() {
        //const { cards } = this.state;
        // const renderCard = this.state.cards.map((card) => {
        //     //console.log('rendercard')
        //     return <CardItem 
        //             key={card.id}
        //             section='education2'
        //             card={card}
        //             editCard={this.editCard}
        //             deleteCard={this.deleteCard}

        //             testFunction={this.testFunction}
        //             />
        // })

        const activeForm = this.state.activeForm ? 'education-form' : 'education-form hidden';
        const activeBtn = this.state.activeBtn ? 'add-btn' : 'add-btn hidden';

        const renderCard2 = this.state.cards.map((card) => {
            //console.log('rendercard')
            return <CardItem2 
                    key={card.id}
                    section='education2'
                    card={card}
                    editCard={this.editCard}
                    deleteCard={this.deleteCard}

                    testFunction={this.testFunction}
                    />
        })

        return (
        <div className='container education'>   

            {renderCard2}
            <SectionHeader name='Education'/>

            {/* {renderCard} */}

            <form className={activeForm} onSubmit={this.onSubmitTask}>
                {/*onSubmit={this.onSubmitTask}*/}

                <div className='form-section'>
                    <label htmlFor='school'>School</label>
                    <input 
                        
                        value={this.state.eduObject.school}
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
                        value={this.state.eduObject.degree}

                        type='text'
                        name='degree'
                        placeholder='Enter Degree'
                        required
                    />
                </div>

                <div className='form-section'>
                    <label htmlFor='year-from'>From</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.eduObject.from}

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
                        onChange={this.handleChange}
                        value={this.state.eduObject.to}

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
                        onChange={this.handleChange}
                        value={this.state.eduObject.additional}

                        type='text'
                        name='additional'
                        id='school-add'
                        placeholder='Honors / Clubs / Acheivements'
                    />
                </div>

                <div className='form-btns'>
                    <button type='submit' className='submit-btn' >Add School</button>
                    <button type='cancel' className='cancel-btn' onClick={this.resetForm}>Cancel</button>
                </div>
            </form>
            
            <SectionFooter activeBtn={activeBtn} toggleForm={this.toggleForm}/>

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
