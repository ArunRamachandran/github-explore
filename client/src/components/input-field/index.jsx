import React from 'react';

const InputField = React.forwardRef((props, ref) => {
    return (
        <div className={props.wrapperClassName}>
            <input 
                type={props.type}
                value={props.value}
                onChange={props.onChangeHandler}
                placeholder={props.placeholder} 
                className={props.className}
                name={props.name}
                id={props.id}
                ref={ref}/>
        </div>
    )
})

export default InputField;