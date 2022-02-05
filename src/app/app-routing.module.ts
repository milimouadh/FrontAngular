import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {NewProductComponent} from "./Controller/new-product/new-product.component";
import {EditProductComponent} from "./Controller/edit-product/edit-product.component";



const routes: Routes = [

  {
    path:"products",component:ProduitsComponent
  },
  {
    path:"new-product",component:NewProductComponent
  },
  {
    path:"",redirectTo:"/products",pathMatch:'full'
  },
  {
    path:"edit-product/:id",component:EditProductComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
