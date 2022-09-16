import {Injectable} from '@angular/core';
import { UserService } from "./user-service";

@Injectable()
export class UserServiceImpl extends UserService{


    private isAuth: boolean = false;
    private accessToken: string = "";

    isAuthenticated(): boolean {

        console.log("[UserServiceImpl] isAuthenticated")
        return this.isAuth;
        
    }
    setAuthenticated(value: boolean): void {
        this.isAuth = value;
    }

    override setAccessToken(token:string): void{
        this.accessToken = token;
    }

    override getAccessToken(): string{
        return this.accessToken;
    }

}