import React from 'react';
import {Link, Outlet} from "react-router-dom";

const UserInfo = ({user: {email, id, name, phone}}) => {
    return (
        <div className={'UserInfo'}>
            <p>Id : {id}</p>
            <p>Name : {name}</p>
            <p>Phone : {phone}</p>
            <p>Email {email}</p>
            <Link to={'posts'}>
                <button>Click for posts</button>
            </Link>
        </div>
    );
};

export default UserInfo;