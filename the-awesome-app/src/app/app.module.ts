import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

import {HelloComponent} from './hello/hello.component';
import {FormsModule} from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "binding", component: DataBindingComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, ProductsModule, AuthModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
