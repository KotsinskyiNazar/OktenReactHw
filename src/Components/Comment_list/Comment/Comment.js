import React from 'react';
import './comment.css'
const Comment = ({comment : {postId , id,name,email,body}}) => {
    return (
        <div className={'comment'}>
            <p>Post id : {postId}</p>
            <p>Id : {id}</p>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Body : {body}</p>
        </div>
    );
};

export default Comment;