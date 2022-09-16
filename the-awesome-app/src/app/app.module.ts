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
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
//import { GadgetsModule } from './gadgets/gadgets.module';
import { UserService } from './auth/services/user-service';
import { UserServiceImpl } from './auth/services/user-service-impl';
import { InterceptorService } from './auth/services/interceptor.service';


const routes: Routes = [
 
  {path: "home", component: HelloComponent},
  {path: "binding", component: DataBindingComponent},
  {path: "search", component: SearchComponent},
  {path: "gadgets", loadChildren: () => import('./gadgets/gadgets.module').then(m => m.GadgetsModule ) },
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
    HttpClientModule,
    //GadgetsModule
  ],
  providers: [
    {provide: UserService, useClass: UserServiceImpl},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
