import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

import {HelloComponent} from './hello/hello.component';
import {FormsModule} from '@angular/forms';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent
  ],
  imports: [
    BrowserModule, FormsModule, ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
