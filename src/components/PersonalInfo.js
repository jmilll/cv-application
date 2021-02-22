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
            <div className='container personal'>

                <div className='personal-name'>
                    <EditableLabel 
                    text='First Name'
                    labelClassName='editable-label label'
                    inputClassName='editable-label input'
                    // inputWidth='200px'
                    // inputHeight='25px'
                    // inputMaxLength='50'
                    // labelFontWeight='bold'
                    // inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                    ></EditableLabel>

                    <EditableLabel 
                    text='Last Name'
                    labelClassName='editable-label label'
                    inputClassName='editable-label input'
                    // inputWidth='200px'
                    // inputHeight='25px'
                    // inputMaxLength='50'
                    // labelFontWeight='bold'
                    // inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                    ></EditableLabel>
                </div>
                
                <div className='personal-info'>

                    <EditableLabel 
                        text='123.456.7899'
                        labelClassName='editable-info info'
                        inputClassName='editable-info info-input'
                        // inputWidth='200px'
                        // inputHeight='25px'
                        // inputMaxLength='50'
                        // labelFontWeight='bold'
                        // inputFontWeight='bold'
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                        ></EditableLabel>

                    <EditableLabel 
                        text='yourEmail@gmail.com'
                        labelClassName='editable-info info'
                        inputClassName='editable-info info-input'
                        // inputWidth='200px'
                        // inputHeight='25px'
                        // inputMaxLength='50'
                        // labelFontWeight='bold'
                        // inputFontWeight='bold'
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                        ></EditableLabel>
                    <EditableLabel 
                        text='portfolio.com'
                        labelClassName='editable-info info'
                        inputClassName='editable-info info-input'
                        // inputWidth='200px'
                        // inputHeight='25px'
                        // inputMaxLength='50'
                        // labelFontWeight='bold'
                        // inputFontWeight='bold'
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                        ></EditableLabel>
                </div>
            
            </div>
        )
    }
}

export default PersonalInfo

//<label class='editable-label label' type='text' value='Hello'>Hello</label>
//<input class='editable-label input' type='text' value='Hello'></input>