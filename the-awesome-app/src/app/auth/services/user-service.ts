export abstract class UserService{

    abstract isAuthenticated(): boolean;
    abstract setAuthenticated(value: boolean): void;
}