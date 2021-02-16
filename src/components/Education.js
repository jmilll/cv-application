import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import SectionFooter from './SectionFooter';
import FormEducation from './FormEducation';

class Education extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    


    render() {
        return (
            <div className='container education'>
                <SectionHeader name='Education'/>

                <FormEducation />

                <SectionFooter />
            </div>
        )
    }
}

export default Education
