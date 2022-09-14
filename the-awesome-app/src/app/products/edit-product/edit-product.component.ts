import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../model/product';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {


  @Input()
  public product: Product | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
