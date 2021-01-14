import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewregistrationComponent } from './newregistration/newregistration.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'' , component:NewregistrationComponent},
  {path: 'newregistration', component:NewregistrationComponent},
  {path: 'home', component:HomeComponent},
  {path: 'addProduct', component:AddProductComponent},
  {path: 'updateProduct/:id', component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
