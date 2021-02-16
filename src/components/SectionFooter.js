import React from 'react'

const SectionFooter = () => {

    function addClick() {
        console.log('add')
    };

    return (
        <div className='section-footer'>
            <button 
                className='add-btn'
                onClick={addClick}
            >Add</button>
        </div>
    )

}

export default SectionFooter