import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { LobbyDto, User } from '../data/models';
import { getLobby } from '../logic/lobbyLogic';
import { getUserId, getUserNameFromLocalStorage } from '../utils';


export default function Lobby() {
    const navigate = useNavigate();

    const { lobbyCode } = useParams();
    const [lobbyDto, setLobbyDto] = useState<LobbyDto>();
    const [waitingUsersJsx, setWaitingUsersJsx] = useState<JSX.Element[]>();
    

    useEffect(() => {
        if (!lobbyCode) {
            navigate('/');   
            return;
        };

        getLobby(lobbyCode)
        .then((lobbyDtoFromBackend) => {
            setLobbyDto(lobbyDtoFromBackend);
        });
    }, [])

    useEffect(() => {
        const userId = getUserId();
        const usersJsx = lobbyDto?.users.map((user) => {
         return <li>{user.name} {(userId === user.id) ? '(You)' : null}</li>
        });

        setWaitingUsersJsx(usersJsx);
    }, [lobbyDto]);

    return (
        <div>
            <div>
                <h1>Room No. {lobbyDto?.lobbyNumber}</h1>
            </div>
            <div>
                <ol>
                    {waitingUsersJsx}
                </ol>
            </div>
            <div>
                <div>
                    <p>Options</p>
                    <p>Max Points: {lobbyDto?.gameOptions.maxPoints}</p>
                </div>
                <div>
                    <Link to={`/game/${lobbyCode}`}>Play</Link>
                </div>
            </div>
        </div>
    );
};
