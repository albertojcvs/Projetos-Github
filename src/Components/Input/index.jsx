import React from 'react';

import './style.css';


function Input({className,...props},ref)  {
    return (
        <input ref={ref} className={`input ${className}` }  {...props}/>
    );
}

export default React.forwardRef(Input);