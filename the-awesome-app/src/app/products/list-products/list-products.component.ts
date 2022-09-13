import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../model/product';


//new ListProductsComponent(new HttpClient());

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public products: Array<Product> = [];
  public searchKey: string = "";

  constructor(private httpClient: HttpClient) { 

      const url = "http://localhost:9000/products";
      //async
      const result = this.httpClient.get<Array<Product>>(url);
     
      result.subscribe((data) =>{
        
        console.log("data", data);
        this.products = data;


      }, function(error){
        console.log("error", error);
      });



  }

  ngOnInit(): void {
  }

}


