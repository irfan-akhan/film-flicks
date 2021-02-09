import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import { API_KEY } from '../resources';
import './User.css';

function User(props) {
    const [requestToken, setRequestToken] = useState(null);
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`,
        )
            .then(response => response.json())
            .then(result => setRequestToken(result.request_token))
            .catch(err => {
                console.log(err);
            });
    }, [requestToken]);
    return (
        <div>
            {console.log('req', requestToken)}
            <Navbar />
            <div className="profile">
                <a
                    href={`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/user`}
                >
                    login
                </a>
                <h1>{requestToken}</h1>
            </div>
        </div>
    );
}

export default User;
