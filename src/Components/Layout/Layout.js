import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import Header from "../header/Header";

import css from './Layout.css'
const Layout = () => {
    return (
        <>
            <Header/>
            <div className={'mainList'}>
                <Outlet />
            </div>
        </>

    );
};

export default Layout;