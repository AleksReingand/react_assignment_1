import React from 'react';

import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="Shapes">
            <input className="UserInput" type="text" onChange={props.changed} placeholder="User name"/>
            <input className="UserInput" type="text" onChange={props.changedPassword} placeholder="Password"/>
        </div>
    );
}

export default userInput;