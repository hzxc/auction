import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';

//装饰器：声明了一个模块
@NgModule({
  //声名组件，指令，管道
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
  ],
  imports: [     //AppModule的依赖模块
    BrowserModule,  //浏览器模块(必选)
    FormsModule,    //表单模块
    HttpModule      //http通信模块
  ],
  providers: [],    //用来声明模块中提供的服务
  bootstrap: [AppComponent]  //bootstrap
})
export class AppModule { }
