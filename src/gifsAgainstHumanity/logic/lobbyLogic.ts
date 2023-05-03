import { LobbyDto } from "../data/models";


export async function createNewLobby(userId: string, userName: string) {
    // call backend
    return '123456';
};


export async function joinLobby(userId: string, userName: string, lobbyCode: string) {
    // call backend
    return '123456';
};


export async function getLobby(lobbyCode: string) {
    // call backend
    const lobbyDto: LobbyDto = {
        lobbyNumber: '1234',
        gameOptions: {
            maxPoints: 10
        },
        users: [
            {
                id: '1234',
                name: 'ori',
                isAdmin: true
            }
        ]
    };
    return lobbyDto;
};
