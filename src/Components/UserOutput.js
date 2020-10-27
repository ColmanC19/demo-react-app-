import React from 'react';

// import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Enter your name for a free horoscope: {props.userName}</p>
            <p>You will prosper greatly!</p>
        </div>
    );
};

export default userOutput;