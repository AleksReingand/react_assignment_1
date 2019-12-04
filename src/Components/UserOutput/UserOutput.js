import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>User name: {props.userName}</p>
            <p>Password: {props.password}</p>
        </div>
    );
}

export default userOutput;