import React, {useState} from 'react';

import UserInfo from "./UserInfo";

const User = ({user: {id, name,}, getUserId}) => {


    return (<div>
            <p>Name : {name}</p>
            <button onClick={() => getUserId(id)}>Info about user</button>
        </div>);
};

export default User;