import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { CartItem } from '../model/cart-item';
import {environment} from '../../environments/environment';
import { UserService } from '../auth/services/user-service';
// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class GadgetService {


  public subject: Subject<Array<CartItem>>;
  private cart: Array<CartItem> = [];
  constructor(private httpClient: HttpClient, private userService: UserService) { 

    this.subject = new Subject<Array<CartItem>>();
  }

  fetchProducts(): Observable<Array<Product>>{

    //const url = "http://localhost:9000/products";
    const url = environment.baseUrl;
    
    //Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWJjIiwicGFzc3dvcmQiOiJhYmNAMTIzIiwiaWF0IjoxNjYzMzE3ODgxLCJleHAiOjE2NjMzMTgxODF9.8wxnuBUfqKn0jhiNB7Pq8e_TeV-ptodEhmdcuj9GPb8"
    // const headers = {"Authorization" : `Bearer ${this.userService.getAccessToken()}`}
    // return this.httpClient.get<Array<Product>>(url, {headers: headers});

    return this.httpClient.get<Array<Product>>(url);

  }

  addToCart(item: CartItem){
    this.cart.push(item);
    
    this.subject.next(this.cart);
  }

  getCart(): Array<CartItem>{

    //return a copy of the cart
    // ... this is the spread operator(ES6)
    return [...this.cart];
  }
}
