import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../model/product';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {


  //*ngFor="let item of products | productsFilter : searchKey
  transform(input: Array<Product>, searchKey: string): Array<Product> {

    // No search key
    if(!searchKey){
        return input;
    }
    else{

      return input.filter(item => item.id?.toString() === searchKey 
                                      || item.name?.toLowerCase().includes(searchKey.toLowerCase())
                                      || item.description?.toLowerCase().includes(searchKey.toLowerCase())
                                      || item.price?.toString() === searchKey);

    }
  }

}
