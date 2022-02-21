import React from 'react';
import './User.css'

const User = ({user:{name,username,email,phone}}) => {
    return (
        <div className={'user'}>
            <div>
                <p>Name : {name}</p>
                <p>User name  : {username}</p>
                <p>Email : {email}</p>
                <p>Phone number : {phone}</p>
            </div>
        </div>
    );
};

export default User;