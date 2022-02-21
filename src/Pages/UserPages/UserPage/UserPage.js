import React, {useEffect, useState} from 'react';

import {Outlet, useParams} from "react-router-dom";
import {usersService} from "../../../services/users.service";
import Users from "../../../Components/User/Users/Users";

import css from './UserPage.css'
const UserPage = () => {
    const [users, setUser] = useState([])

    useEffect(() => {
        usersService.getAll().then(value => setUser(value))
    }, [])
    return (
        <div>
            <div className={'UserList'}>
                {users.map(value => <Users key={value.id} user={value}/>)}
            </div>
            <Outlet/>
        </div>

    );
}

export {UserPage};