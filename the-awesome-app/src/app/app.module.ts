import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

import {HelloComponent} from './hello/hello.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
 
  {path: "home", component: HelloComponent},
  {path: "binding", component: DataBindingComponent},
  {path: "search", component: SearchComponent},

  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: NotFoundComponent},
  
]

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, NotFoundComponent, SearchComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ProductsModule, 
    AuthModule, 
    RouterModule.forRoot(routes), 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
