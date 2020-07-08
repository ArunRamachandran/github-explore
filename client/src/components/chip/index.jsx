import React from 'react';

const Chip = (props) => 
    <div className={`chip-container ${props.className} ${props.onClickHandler ? 'pointer' : ''}`} onClick={props.onClickHandler}>
        <span className="chip-color"/>
        <span className="chip-item">{props.item}</span>
    </div>

export default Chip;