const User = 'user';
const Token = 'token'

export function getUserLogin() {
    return localStorage.getItem(User)
}

export function getTokenUserLogin() {
    return localStorage.getItem(Token)
}