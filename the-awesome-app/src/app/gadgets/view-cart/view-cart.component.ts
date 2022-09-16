import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { GadgetService } from '../gadget.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  public cart: Array<CartItem> = [];

  constructor(private gadgetService: GadgetService) { 

    this.cart = gadgetService.getCart();

    gadgetService.subject.subscribe((cart) => {
      this.cart = cart;
    })

  }

  ngOnInit(): void {
  }

}
