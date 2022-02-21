import React from 'react';
import {Outlet} from "react-router-dom";


import {Cars, Form} from "../../Components";

const CarPage = () => {
    return (
        <div className={"carPage"}>
            <Form/>
            <Cars/>
            <Outlet/>
        </div>
    );
};

export {CarPage};