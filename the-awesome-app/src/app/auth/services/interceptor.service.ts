import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user-service';


@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("[InterceptorService] intercept");
    const accessToken = this.userService.getAccessToken();

    if(accessToken){

      return next.handle(req.clone({setHeaders: {Authorization: `Bearer ${accessToken}`}}))

    }
    else{
      return next.handle(req);
    }
  }
}
