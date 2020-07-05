import React from 'react';

const Chip = (props) => 
    <div className={`chip-container ${props.className}`}>
        <span className="chip-color"/>
        <span className="chip-item">{props.item}</span>
    </div>

export default Chip;