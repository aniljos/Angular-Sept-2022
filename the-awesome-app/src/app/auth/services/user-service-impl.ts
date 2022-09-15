import { UserService } from "./user-service";

export class UserServiceImpl extends UserService{


    private isAuth: boolean = false;

    isAuthenticated(): boolean {

        console.log("[UserServiceImpl] isAuthenticated")
        return this.isAuth;
        
    }
    setAuthenticated(value: boolean): void {
        this.isAuth = value;
    }

}