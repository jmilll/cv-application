import React, { Component } from 'react'
import EditableLabel from 'react-inline-editing';

class PersonalInfo extends Component {
    constructor(props) {
        super(props)

        this._handleFocus = this._handleFocus.bind(this);
        this._handleFocusOut = this._handleFocusOut.bind(this);

        this.state = {

        }
    }

    _handleFocus(text) {
        console.log('Focused with text: ' + text);
    }

    _handleFocusOut(text) {
        console.log('Left editor with text: ' + text);
    }

    render() {
        return(
            <div className='container personal-info'>
                Personal Info
                <EditableLabel text='Hello!'
                labelClassName='editableLabel label'
                inputClassName='editableLabel input'
                inputWidth='200px'
                inputHeight='25px'
                inputMaxLength='50'
                labelFontWeight='bold'
                inputFontWeight='bold'
                onFocus={this._handleFocus}
                onFocusOut={this._handleFocusOut}
            />
            </div>
        )
    }
}

export default PersonalInfo
