import React from 'react';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => console.log(res))
    }, [])


    const { id } = useParams(); // useParams hook to get the user ID from the URL
    return (
        <div>
            <h1>User Detail</h1>
            {user}

        </div>
    );
}

export default User;
