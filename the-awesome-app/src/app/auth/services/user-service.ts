export abstract class UserService{

    abstract isAuthenticated(): boolean;
    abstract setAuthenticated(value: boolean): void;

    setAccessToken(token:string): void{

    }
    getAccessToken(): string{
         return "";
    }
}