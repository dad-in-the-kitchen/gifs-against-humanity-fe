import React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate, NavigateFunction, useLocation } from 'react-router-dom';

import { createNewLobby, joinLobby } from '../logic/lobbyLogic';
import { getUserId, setUserNameInLocalStorage, getUserNameFromLocalStorage } from '../utils';


async function createLobbyAndRedirect(navigateFunction: NavigateFunction) {
    const userId = getUserId();
    const userName = getUserNameFromLocalStorage();

    const lobbyCode = await createNewLobby(userId, userName);
    navigateFunction(`/lobby/${lobbyCode}`)
};

async function joinLobbyAndRedirect(navigateFunction: NavigateFunction, lobbyCode: string) {
    const userId = getUserId();
    const userName = getUserNameFromLocalStorage();

    lobbyCode = await joinLobby(userId, userName, lobbyCode);
    navigateFunction(`/lobby/${lobbyCode}`);
};


export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();

    const [userName, setUserName] = useState<string>(getUserNameFromLocalStorage());
    const [lobbyCode, setLobbyCode] = useState<string>('');
    
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
                onChange={(e) => setUserName(e.target.value)}></input>
            </div>
            <div>
                <div>
                    <button onClick={() => createLobbyAndRedirect(navigate)}>
                        Create
                    </button>
                </div>
                <div>
                    <button onClick={() => joinLobbyAndRedirect(navigate, lobbyCode)}>Join</button>
                    <input type='text' placeholder='Room Code' value={lobbyCode} 
                    onChange={(e) => setLobbyCode(e.target.value)}></input>
                </div>
            </div>
        </div>
    );
};
