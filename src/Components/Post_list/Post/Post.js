import React from 'react';
import './Post.css'

const Post = ({post : {id,title,body}}) => {
    return (
        <div className={'post'}>
            <p>Id of post : {id}</p>
            <p>Title of post : {title}</p>
            <p>Body of psot : {body}</p>
        </div>
    );
};

export default Post;