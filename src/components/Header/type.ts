export interface User {
    username: string;
}
export interface HeaderInterface {
    user?: User;
    onLogin?: () => { };
    onLogout?: () => { };
    onCreateAccount?: () => { };
}