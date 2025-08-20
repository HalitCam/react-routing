import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then((response) => { setUsers(response.data) })
        .then(()=>setLoading(false))
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {loading ? `Loading...` : null}
            <ul>
                
                {
                    users.map((user) => (
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
