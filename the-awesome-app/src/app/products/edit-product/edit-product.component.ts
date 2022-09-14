import { Component, OnInit, Input, OnChanges, 
    SimpleChanges, DoCheck, OnDestroy, Output, EventEmitter } from '@angular/core';
import {Product} from '../../model/product';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnChanges, DoCheck, OnDestroy {


  @Input() // initilazed from the selectedProduct of ListProducts
  public product: Product | null = null;


  @Output()  // event raised when the user clicks on the save button
  public saved: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()  // event raised when the user clicks on the cancel button
  public cancelled: EventEmitter<string> = new EventEmitter<string>();

  //copy of product
  public temp: Product = new Product();

  constructor() { 

    console.log("[constructor] [this.product]", this.product);
  
  }

  ngOnInit(): void {

    console.log("[ngOnInit] [this.product]", this.product);
   
  }

  ngOnChanges(changes: SimpleChanges): void {
      
    console.log("[ngOnChanges] [changes]", changes);
    if(this.product){
      Object.assign(this.temp, this.product);
    }
  }
  ngDoCheck(): void {
      console.log("[ngDoCheck][Change dectection happened]")
  }

  ngOnDestroy(): void {
    console.log("[ngOnDestroy][Component is removed for the DOM]")
  }

  save(){

    // if(this.product){
    //   Object.assign(this.product, this.temp);
    // }
    this.saved.emit(this.temp);
    
  }

  cancel(){
    this.cancelled.emit("update cancelled");
  }

}
