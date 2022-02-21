import React from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";


import {getUsers, userActions} from "../../store/users.slice";
import {Users} from "../../Components";

const UsersPage = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};