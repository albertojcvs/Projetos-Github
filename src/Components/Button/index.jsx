import React from 'react';

import './style.css';


function Button(props) {
    return (
        <button>{props.children}</button>
    );
}

export default Button;