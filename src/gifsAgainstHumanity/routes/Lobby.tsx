import React from 'react';
import { Link } from 'react-router-dom'

export default function Lobby() {
    return (
        <div>
            <div>
                <h1>Room No. 12345</h1>
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
                    <Link to='/game/12345'>Play</Link>
                </div>
            </div>
        </div>
    );
};
