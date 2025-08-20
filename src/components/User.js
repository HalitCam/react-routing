import React from 'react';
import { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const User = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({})
    const { id } = useParams(); // useParams hook to get the user ID from the URL

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setUser(res.data))
            .then(() => setLoading(false))
    }, [id])



    return (
        <div>
            <h1>User Detail</h1>
            {loading && <h3 style={{ color: 'blue ' }}>Loading...</h3>}
            {!loading && <code>{JSON.stringify(user)}</code>} <br />
            <Link to={`/user/${parseInt(id) +1}`}>Next User ({parseInt(id)+1})</Link>
        </div>

    );
}

export default User;
