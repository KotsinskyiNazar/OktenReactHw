import React, {useEffect, useState} from 'react';
import {userServices} from "../../services/userService/user.service";

const Post = ({post: {id, title, body}}) => {

    return (

        <div>
            <p>Post id : {id}</p>
            <p>Post title : {title}</p>
            <p>Post body : {body}</p>
        </div>);
};

export default Post;