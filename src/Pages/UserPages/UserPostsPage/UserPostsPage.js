import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../../services/post.service";
import {usersService} from "../../../services/users.service";

const UserPostsPage = () => {
    const [posts,setPost] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        usersService.getPosts(id).then(value => setPost(value))
    },[])
    console.log(posts)
    return (
        <div className={'userPosts'}>
            {
                posts.map(value => <div> id:{value.id} title:{value.title}</div>)
            }
        </div>
    );
};

export {UserPostsPage};