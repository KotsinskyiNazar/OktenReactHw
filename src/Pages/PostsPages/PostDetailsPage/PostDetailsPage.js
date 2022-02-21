import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet} from "react-router-dom";

import {postService} from "../../../services/post.service";
import PostsInfo from "../../../Components/Posts/PostInfo/PostsInfo";
import css from './PostDetailsPage.css'
const PostDetailsPage = () => {
    const {id} = useParams()
    const {state} = useLocation()
    const [info, setInfo] = useState(null)
    useEffect(() => {
        if (state) {
            setInfo(state)
            return
        }
        postService.getById(id).then(value => setInfo([value]))
    }, [id])
    return (
        <div className={'PostInfo'}>
                {info && (<PostsInfo key={info.id} post={info}/>)}
        </div>
    );
};

export {PostDetailsPage};