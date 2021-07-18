import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { ViewtopComponent } from './shared/viewtop/viewtop.component';
import { SearchboxComponent } from './shared/searchbox/searchbox.component';
import { ViewonComponent } from './shared/viewon/viewon.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FilterComponent } from './components/filter/filter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PolocyShopComponent } from './shared/polocy-shop/polocy-shop.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ItemProductComponent } from './components/item-product/item-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    ViewtopComponent,
    SearchboxComponent,
    ViewonComponent,
    CategoriesComponent,
    FilterComponent,
    PolocyShopComponent,
    NewProductComponent,
    ItemProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
