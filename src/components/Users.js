import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {axios('https://jsonplaceholder.typicode.com/users')
    .then ((response) => {setUsers(response.data)})}, []);

    return (
        <div>
            <h2>Users</h2> 
            <ul>
            {
                users.map((user)=> (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}> {user.name} </Link>
                    </li>
                ))
            }
            </ul>
            
        </div>
    );
}

export default Users;
