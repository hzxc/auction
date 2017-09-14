import { Component } from '@angular/core';

@Component({  // 装饰器
  // 元数据
  selector: 'app-root',  // css选择器  <app-root></app-root>
  templateUrl: './app.component.html', // html模板
  styleUrls: ['./app.component.css']   // css样式用于当前组件
})

// 定义了组件的控制器(typescript类)
export class AppComponent {
  title = 'Hzxc';
  test() {
    // $('');
  }
}

//输入属性可以在组件树中传输数据 @Inputs()
