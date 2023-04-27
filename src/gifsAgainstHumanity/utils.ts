import { v4 as uuidv4 } from 'uuid';


export function getUserId() {
    const userIdKey = 'userId';
    let userIdValue = localStorage.getItem(userIdKey);
    if (userIdValue) {
        return userIdValue;
    };

    userIdValue = uuidv4();
    localStorage.setItem(userIdKey, userIdValue);
    return userIdValue;
};


export function getUserNameFromLocalStorage() {
    const userNameKey = 'userName';
    return localStorage.getItem(userNameKey) || '';
};


export function setUserNameInLocalStorage(userName: string) {
    const userNameKey = 'userName';
    localStorage.setItem(userNameKey, userName);
    return userName;
};