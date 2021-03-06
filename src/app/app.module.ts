import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductService } from './shared/product.service';
import { FilterPipe } from './pipe/filter.pipe';


const routeCofing: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:prodId', component: ProductDetailComponent }
]

// 装饰器：声明了一个模块
  // 声名组件，指令，管道
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe,
    ProductComponent,
    StarsComponent,
  ],
  imports: [
    // AppModule的依赖模块     
    // 浏览器模块(必选)
    BrowserModule,
    // 表单模块
    FormsModule,
    // http通信模块
    HttpModule,
    RouterModule.forRoot(routeCofing),
    ReactiveFormsModule
  ],
  providers: [ProductService],    // 用来声明模块中提供的服务
  bootstrap: [AppComponent]  // bootstrap
})
export class AppModule { }
