import React from 'react';
import { Link, useParams } from 'react-router-dom'

export default function Lobby() {
    const { lobbyCode } = useParams();

    return (
        <div>
            <div>
                <h1>Room No. {lobbyCode}</h1>
            </div>
            <div>
                <ol>
                    <li>Ori</li>
                    <li>Gabi</li>
                    <li>Tomer</li>
                    <li>Jordan</li>
                </ol>
            </div>
            <div>
                <div>
                    <p>Options</p>
                    <p>Max Points: 10</p>
                </div>
                <div>
                    <Link to={`/game/${lobbyCode}`}>Play</Link>
                </div>
            </div>
        </div>
    );
};
