import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';


const Users = () => {
    const { path, url } = useRouteMatch();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(path, url)
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then((response) => { setUsers(response.data) })
            .then(() => setLoading(false))
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
            <Routes>
                <Route exact path={path}>
                    <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`}>
              {/* <Topic /> */}
                </Route>
            </Routes>

        </div>
    );
}

export default Users;
