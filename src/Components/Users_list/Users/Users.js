import React, {useEffect, useState} from 'react';

import User from "../User/User";
import UserInfo from "../User/UserInfo";
import {userServices} from "../../../services/userService/user.service";
import './list.css'
import Post from "../../Post_list/Post";


const Users = () => {

    const [users, setUsers] = useState([])
    const [info, setInfo] = useState([])
    const [posts, setPost] = useState([])

    useEffect(() => {
            userServices.getAll()
                .then(response => setUsers(response))
        }

        , [])
    const getUserId = (id) => {
        userServices.getById(id)
            .then(response => setInfo(response))
        console.log(id)

    }
    const getPostId = (id) => {
        let userId = id

        userServices.getPost(userId)
            .then(response => setPost(response))
        console.log(userId)
    }
    return (<div className={'list'}>
        <div className={'users'}>{users.map(response => <User user={response} getUserId={getUserId}/>)}</div>
        <div className={'userInfo'}>{info && <UserInfo info={info} getPostId={getPostId}/>}</div>
        {posts.map(response => <Post post={response}/>)}


    </div>);
};

export default Users;