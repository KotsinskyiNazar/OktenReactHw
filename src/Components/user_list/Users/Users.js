import user from "../user/User";
import User from "../user/User";
import {useEffect, useState} from "react";
let users = [];

const Users = () =>{
    const [users,setUsers] = useState([])

    useEffect( ()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => setUsers(response))
    },[])

    return(
        <div>
            <h1>Users</h1>
            {users.map(response => <User user = {response}/>)}
        </div>
    );
};
export default Users;