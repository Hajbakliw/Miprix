import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { StoreComponent } from './components/store/store.component';


const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'store', component:StoreComponent},
  {path:'', component:HomeComponent},
  {path:'first', component:FirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
