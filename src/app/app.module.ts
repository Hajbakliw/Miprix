import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/home/collection/collection.component';
import { NewCollectionComponent } from './components/home/new-collection/new-collection.component';
import { NewProductComponent } from './components/home/new-product/new-product.component';
import { TopSellingComponent } from './components/home/top-selling/top-selling.component';
import { TopSelling2Component } from './components/home/top-selling2/top-selling2.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { BarreComponent } from './components/home/barre/barre.component';
import { ProductComponent } from './components/product/product.component';
import { ProducttabComponent } from './components/product/producttab/producttab.component';
import { RelatedproductsComponent } from './components/product/relatedproducts/relatedproducts.component';
import { StoreComponent } from './components/store/store.component';
import { ProductsComponent } from './components/store/products/products.component';
import { TopsellingstoreComponent } from './components/store/topsellingstore/topsellingstore.component';
import { FirstComponent } from './components/first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductChildComponent } from './components/home/new-product/product-child/product-child.component';
import { CollectionChildComponent } from './components/home/collection/collection-child/collection-child.component';
import { TopSellingChildComponent } from './components/home/top-selling/top-selling-child/top-selling-child.component';
import { TopSelling2ChildComponent } from './components/home/top-selling2/top-selling2-child/top-selling2-child.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CollectionComponent,
    NewCollectionComponent,
    NewProductComponent,
    TopSellingComponent,
    TopSelling2Component,
    NewsLetterComponent,
    BarreComponent,
    ProductComponent,
    ProducttabComponent,
    RelatedproductsComponent,
    StoreComponent,
    ProductsComponent,
    TopsellingstoreComponent,
    FirstComponent,
    ProductChildComponent,
    CollectionChildComponent,
    TopSellingChildComponent,
    TopSelling2ChildComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ReactiveFormsModule,
   FormsModule,
   //InMemoryWebApiModule.forRoot(DataService),
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
