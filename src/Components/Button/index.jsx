import React from 'react';

import './style.css';


function Button({className,...props}) {
    return (
        <button  className={` button ${className}` } {...props} >{props.children}</button>
    );
}

export default Button;