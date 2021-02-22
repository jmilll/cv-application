import React from 'react'

const SectionFooter = (props) => {

    const { activeBtn, toggleForm } = props;

    function addClick() {
        //console.log('add + open form')
        toggleForm()
    };

    return (
        <div className='section-footer'>
            <button 
                className={activeBtn}
                onClick={addClick}
            >Add</button>
        </div>
    )

}

export default SectionFooter