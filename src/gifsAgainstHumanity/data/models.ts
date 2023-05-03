export interface User {
    id: string,
    name: string,
    isAdmin: boolean,
};

export interface GameOptions {
    maxPoints: number,
};

export interface LobbyDto {
    lobbyNumber: string,
    gameOptions: GameOptions
    users: User[],
};
