import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
                <NavLink to="users">Users</NavLink>
                <NavLink to="posts" >Posts</NavLink>
            </div>
        </div>
    );
};

export default Header;