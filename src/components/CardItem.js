import React from 'react'
import uniqid from "uniqid";

const CardItem = (props) => {

    const { section, card } = props;
    //const cards = props;
    console.log(card);

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

    } else if (section === 'education2') {
        return (

            <div className='card-item'>
                <p className='hidden'>{card.id}</p>

                <div className='school-info'>
                    <h5>{card.school}</h5>
                    <p className='degree'>{card.degree}</p>
                </div>
                <div className='years'>
                    <p>{card.from} to {card.to}</p>
                </div>
                <div className='additional edu'>
                    <p className='add-text'>{card.additional}</p>
                </div>
            </div>
        )

    }else if (props.section === 'practical experience') {
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