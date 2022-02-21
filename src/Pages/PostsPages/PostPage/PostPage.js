import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";


import {postService} from "../../../services/post.service";
import Posts from "../../../Components/Posts/Posts/Posts";
import css from './PostPage.css'

const PostPage = () => {
    const [posts, setPost] = useState([])

    useEffect(() => {
        postService.getAll().then(value => setPost(value))
    }, [])
    return (
        <div >
            postpage
            <div className={'PostList'}>
                {posts.map(value => <Posts key={value.id} posts={value}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {PostPage};