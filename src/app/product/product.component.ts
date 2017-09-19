import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';//管道依赖js

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  private keyword:string;
  private titleFilter:FormControl = new FormControl();
  private products:Array<Product>;
  private imageUrl='http://placehold.it/320x150';

  constructor(private prodSrv:ProductService) {
    this.titleFilter.valueChanges.debounceTime(500).subscribe(value => this.keyword = value);
   }
  // 此方法会在当前组件被实例化后调用一次
  ngOnInit() {
   this.products = this.prodSrv.getProducts();
  }
}


