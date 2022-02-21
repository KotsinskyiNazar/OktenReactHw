import React, {useState} from 'react';


const UserInfo = ({info: {id, username, email, phone, website}, getPostId}) => {


    return (<div>
            <p>Id : {id}</p>
            <p>User name : {username}</p>
            <p>Email : {email}</p>
            <p>Addres : lviv </p>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>
            <button onClick={() => getPostId(id)}>Click for posts of user</button>
        </div>);
};

export default UserInfo;