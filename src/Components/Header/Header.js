import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./header.css"
const Header = () => {
    return (
        <div className={"header"}>
                <NavLink to="cars">Cars</NavLink>
                <NavLink to="users">Users</NavLink>
                <NavLink to="posts">Posts</NavLink>
                <NavLink to="Comments">Comments</NavLink>
        </div>
    );
};

export {Header};