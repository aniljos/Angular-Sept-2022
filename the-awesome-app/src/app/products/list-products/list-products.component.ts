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
  public nProduct: Product = new Product(0, "", 0, "");
  private url: string;

  public selectedProduct: Product | null = null;


  constructor(private httpClient: HttpClient) { 

      this.url = "http://localhost:9000/products"
      //"http://localhost:9000/products";
      //async
      const result = this.httpClient.get<Array<Product>>(this.url);
     
      result.subscribe((data) =>{
        
        console.log("data", data);
        this.products = data;


      }, function(error){
        console.log("error", error);
      });



  }

  ngOnInit(): void {
  }

  saveProduct(){

        this.httpClient
                .post(this.url, this.nProduct)
                .subscribe(() => {

                  this.products.push(this.nProduct);
                  this.nProduct = new Product(0, "", 0, "");

                  alert("Saved");
                
                }, () => {

                  alert("Failed to save");
                });

  }

  deleteProduct(product: Product){

      this.httpClient
          .delete(this.url + "/" + product.id)
          .subscribe(() => {

            const index = this.products.findIndex(item => item.id === product.id);
            this.products.splice(index, 1);

            alert("Deleted");

          }, () => {

            alert("Failed to delete")
          })

  }

  editProduct(product: Product){

    this.selectedProduct = product;
  }

  editUpdate(updatedProduct: Product){
    console.log("[editUpdate]", updatedProduct);

    this.httpClient
            .put(this.url + "/" + updatedProduct.id, updatedProduct)
            .subscribe(() => {

              const index = this.products.findIndex(item => item.id === updatedProduct.id);
              this.products[index] = updatedProduct;
              this.selectedProduct = null;

            }, () => {

              alert("Failed to update")
            })

  }

  editCancelled(message: string){
    console.log("[editCancelled]", message);

    this.selectedProduct = null;
    alert(message);

  }

}


