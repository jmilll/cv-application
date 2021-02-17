import React, { Component } from 'react';
import uniqid from "uniqid";
import SectionHeader from './SectionHeader';
import SectionFooter from './SectionFooter';
import FormEducation from './FormEducation';
import CardItem from './CardItem';

class Education extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: uniqid(),
            school: '',
            degree: '',
            from: '',
            to: '',
            additional: '',
            cards: [],
            card: '',

        }
    }
    


    render() {

        const displayCard = this.state.cards.map((card) => {
            return <CardItem section='education' />
            }
        )

        // const displayCard = 
        //     <CardItem 
        //         section='education' 
        //         name='edu test' 
        //         school='Arizona State'
        //         degree='Graphic Info'
        //         from='2010'
        //         to='2011'
        //     />


        return (
            <div className='container education'>
                <SectionHeader name='Education'/>

                {displayCard}

                <FormEducation />

                <SectionFooter />
            </div>
        )
    }
}

export default Education
