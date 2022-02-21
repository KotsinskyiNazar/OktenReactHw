import React from 'react';

import {Outlet} from "react-router-dom";
import {Comments} from "../../Components";

const CommentsPage = () => {
    return (
        <div>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};