import { UserService } from "./user-service";

export class UserServiceMock extends UserService{


    private isAuth: boolean = false;

    isAuthenticated(): boolean {

        console.log("[UserServiceMock] isAuthenticated")
        return this.isAuth;
        
    }
    setAuthenticated(value: boolean): void {
        this.isAuth = value;
    }

}