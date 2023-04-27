import React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate, NavigateFunction, useLocation, Link } from 'react-router-dom';

import { CreateNewLobby } from '../logic/lobbyLogic';
import { getUserId, setUserNameInLocalStorage, getUserNameFromLocalStorage } from '../utils';


async function createLobbyAndRedirect(navigateFunction: NavigateFunction) {
    const userId = getUserId();
    const userName = getUserNameFromLocalStorage();

    if (!userName) {
        throw new Error('no name set');
    }
    const lobbyCode = await CreateNewLobby(userId, userName);
    navigateFunction(`/lobby/${lobbyCode}`)
};



export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();

    const [userName, setUserName] = useState<string>(getUserNameFromLocalStorage() || '');
    
    useEffect(() => {
        if (location.pathname !== '/') {
            navigate('/');
        };
    }, []);

    useEffect(() => {
        setUserNameInLocalStorage(userName);
    }, [userName]);

    return (
        <div>
            <div>
                <p>Your name is:</p>
                <input type='text' placeholder='Putzi Katzi' value={userName} 
                onChange={(e) => {setUserName(e.target.value)}}></input>
            </div>
            <div>
                <div>
                    <button onClick={() => createLobbyAndRedirect(navigate)}>
                        Create
                    </button>
                </div>
                <div>
                    <button>Join</button>
                    <input type='text' placeholder='Room Code'></input>
                </div>
            </div>
        </div>
    );
};
