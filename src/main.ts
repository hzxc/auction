import { enableProdMode } from '@angular/core';  
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';  //主模块导入
import { environment } from './environments/environment';  //导入环境配置

if (environment.production) {//如果为生产环境
  enableProdMode();//关闭angular开发者模式
}

platformBrowserDynamic().bootstrapModule(AppModule)   //指定程序起点，将AppModule指定为主模块
  .catch(err => console.log(err));
