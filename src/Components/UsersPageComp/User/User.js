import React from 'react';

const User = ({user : {name}}) => {
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export {User};