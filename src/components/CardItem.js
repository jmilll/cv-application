import React, { Component } from 'react'

const CardItem = (props) => {
    
    // this.state = {
    //     id: {uniqid},
    //     school: '',
    //     degree: '',
    //     from: '',
    //     to: '',
    //     additional: '',
    //     cards: [],
    //     card: '',

    // }

    if (props.section === 'education') {
        return (
            <div className='card-item'>
                <div className='school-info'>
                    <h5>{props.school}</h5>
                    <p className='degree'>{props.degree}</p>
                </div>
                <div className='years'>
                    <p>{props.from} to {props.to}</p>
                </div>
                <div className='additional edu'>
                    <p className='add-text'>{props.additional}</p>
                </div>
            </div>
        )

    } else if (props.section === 'practical experience') {
        return (
            <div className='card-item'>
                <h5>Practical Experience Card</h5>
            </div>
        )

    } else {
        return (
            <div className='card-item'>
                <h5>Other Card</h5>
            </div>
        )
    }


}

export default CardItem