import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {User} from "../User/User";
import userReducer, {getUsers} from "../../../store/users.slice";

const Users = () => {

    const {users} = useSelector(state => state["userReducer"])

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUsers())
    },[])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};