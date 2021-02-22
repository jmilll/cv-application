import React from 'react'

const SectionHeader = (props) => {

    return (
        <div className='section-header'id={props.name}>
            <h4>{props.name}</h4>
        </div>
    )

}

export default SectionHeader