import React from 'react';

const Post = ({post:{title,id}}) => {
    return (
        <>
            <p>{id} : {title}</p>
        </>
    );
};

export {Post};