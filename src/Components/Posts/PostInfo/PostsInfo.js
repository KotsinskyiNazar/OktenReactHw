import React from 'react';

import {Link, Outlet} from "react-router-dom";

const PostsInfo = ({post: {title, id, userId, body}}) => {
    return (
        <div>
                <p>Title : {title}</p>
                <p>Id : {id}</p>
                <p>UserId : {userId}</p>
                <p>Body : {body}</p>
                <Link to={'comments'}>
                    <button>Click for comments</button>
                </Link>
            <Outlet/>
        </div>
    );
};

export default PostsInfo;