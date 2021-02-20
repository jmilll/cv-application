import React, { Component } from 'react'

const SectionHeader = (props) => {

    return (
        <div className='section-header'id={props.name}>
            <h4>{props.name}</h4>
            {/* <button className='edit-btn'>Edit</button> */}
        </div>
    )

}

export default SectionHeader