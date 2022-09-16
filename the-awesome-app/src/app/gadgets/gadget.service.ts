import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { CartItem } from '../model/cart-item';
// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class GadgetService {


  public subject: Subject<Array<CartItem>>;
  private cart: Array<CartItem> = [];
  constructor(private httpClient: HttpClient) { 

    this.subject = new Subject<Array<CartItem>>();
  }

  fetchProducts(): Observable<Array<Product>>{

    const url = "http://localhost:9000/products";
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
