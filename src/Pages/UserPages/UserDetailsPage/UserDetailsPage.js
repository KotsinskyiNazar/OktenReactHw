import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet, Link} from "react-router-dom";


import {usersService} from "../../../services/users.service";
import UserInfo from "../../../Components/User/UserInfo/UserInfo";
import css from './UserDetailsPage.css'
const UserDetailsPage = () => {
    const {id} = useParams()
    const {state} = useLocation()
    const [user, setUser] = useState(null)


    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        usersService.getById(id).then(value => setUser([value]))
    }, [id])
    return (
        <div className={'userDetails'}>
            {
                user && (<UserInfo user={user} key={user.id}/>)
            }
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};