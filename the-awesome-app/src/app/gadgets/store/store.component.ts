import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { GadgetService } from '../gadget.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public products: Array<Product> = [];

  constructor(private gadgetService: GadgetService) { 

      gadgetService
            .fetchProducts()
            .subscribe((data) => {
              this.products = data;
            })

  }

  ngOnInit(): void {
  }

  add(product: Product, quantity: string){

    this.gadgetService.addToCart(new CartItem(product, Number(quantity)));
  }

}
