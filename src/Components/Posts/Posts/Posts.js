import React from 'react';
import {Link} from 'react-router-dom'

const Posts = ({posts}) => {
    return (
        <div>
                <Link to={posts.id.toString()} state={posts}><p>{posts.title}</p></Link>
        </div>
    );
};

export default Posts;