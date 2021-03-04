import React from 'react';

import './style.css';


function Input({className,...props}) {
    return (
        <input className={`input ${className}` }  {...props}/>
    );
}

export default Input;