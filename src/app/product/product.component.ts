import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  private products:Array<Product>;
  private imageUrl='http://placehold.it/320x150';

  constructor(private prodSrv:ProductService) { }
  // 此方法会在当前组件被实例化后调用一次
  ngOnInit() {
   this.products = this.prodSrv.getProducts();
  }
}


