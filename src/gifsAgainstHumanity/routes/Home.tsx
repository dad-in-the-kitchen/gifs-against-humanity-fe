import React from 'react';
import { useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom';


export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (location.pathname !== '/') {
            navigate('/');
        };
    }, []);

    return (
        <div>
            <div>
                <p>Your name is:</p>
                <input type='text'></input>
            </div>
            <div>
                <div>
                    <Link to='/lobby/12345'>Create</Link>
                </div>
                <div>
                    <button>Join</button>
                    <input type='text' placeholder='Room Code'></input>
                </div>
            </div>
        </div>
    );
};
