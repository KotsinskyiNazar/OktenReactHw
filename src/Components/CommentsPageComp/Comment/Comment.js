import React from 'react';

const Comment = ({comment : {id,name,email}}) => {
    return (
        <div>
            <p>{id} : {name} : {email}</p>
        </div>
    );
};

export {Comment};