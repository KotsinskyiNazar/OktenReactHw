import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";


import {postService} from "../../../services/post.service";
import css from './Comments.css'

const PostCommentPage = () => {
    const {id} = useParams()
    const [comment,setComment] = useState([])
    useEffect(()=>{
        postService.getComment(id).then(value => setComment(value))
    },[])
    return (
        <div>
            <div className={"Comments"}>
                {comment.map(value => <p>{value.email} id:{value.id}</p>)}
            </div>
        </div>
    );
};

export {PostCommentPage};