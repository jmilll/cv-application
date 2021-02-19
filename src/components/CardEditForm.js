
// import React from 'react'

// function CardEditForm(props) {
//     let {card, saveCard, handleEditChange} = props


//     handleEditChange = (id) => {
//         console.log('editchange '+ id)
//     }

//     saveCard = (id) => {
//         console.log('savecard ' + id)
//     }



//     return (
//         <div>
//             {card.school}
//             {card.degree}
//             <p>my id = {card.id}</p>

//             <input 
                        
//                         value={card.school}
//                         onChange={() => handleEditChange(card.id)}

//                         type='text'
//                         name='school'
//                         placeholder='Enter School'
//                         required
//                     />

//             <input 
                        
//                         value={card.degree}
//                         onChange={() => handleEditChange(card.id)}

//                         type='text'
//                         name='school'
//                         placeholder='Enter School'
//                         required
//                     />

//                     <button type='button'onClick={() => saveCard(card.id)}>SAVE EDIT</button>
//         </div>
//     )
// }

// export default CardEditForm

import React, { Component } from 'react'

class CardEditForm extends Component {
    constructor(props) {
        super(props)
        this.testFunction = props.testFunction.bind(this)
        //const test = () => props.testFunction()
        this.state = {
            newCard: {
                id: props.card.id,
                school: props.card.school,
                degree: props.card.degree,
                from: props.card.from,
                to: props.card.to,
                additional: props.card.additional,
            },
            test: props.testFunction()
        }
    }

    //a() {props.testFunction.testFunction()}

    //b() {props.testFunction2()}

    onSubmitTask2 = (e) => {
        e.preventDefault();
        this.testFunction()

        //this.test()
       // this.a()
       // this.b()
        //props.testFunction()
        //props.testFunction2()

        //console.log(props)
        // alert(`
        //     ${this.state.eduObject.school} ${this.state.eduObject.degree}
        // `)

        // this.setState({
        //     cards: this.state.cards.concat(this.state.eduObject), 
        //     //eduObject: {school: 'value'}
            
        // });

        //this.resetForm()
        console.log('submited')
        //console.log("after " + this.state.task)
    }

    handleChange = (e) => {
        this.setState({
            school: e.target.value
        })
    }


    render() {
        return (
            <form onSubmit={this.onSubmitTask2()}>
                <div className='form-section'>
                    <label htmlFor='school'>School EDIT</label>
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
                    <label htmlFor='d'>DEGREE EDIT</label>
                    <input 
                        
                        value={this.state.newCard.degree}
                        onChange={this.handleChange}

                        type='text'
                        name='d'
                        placeholder='Edit d'
                        required
                    />
                </div>


                <button type='submit'>SUBMIT EDIT</button>
            </form>
        )
    }
}

export default CardEditForm
