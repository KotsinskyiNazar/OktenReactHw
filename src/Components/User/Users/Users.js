import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Users = ({user}) => {


    return (
        <p>
            <Link to={user.id.toString()} state={user}><p>{user.name}</p></Link>
        </p>
    );
};

export default Users;