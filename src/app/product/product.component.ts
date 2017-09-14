import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imageUrl='http://placehold.it/320x150';

  constructor() { }
  // 此方法会在当前组件被实例化后调用一次
  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '商品描述1',['食品']),
      new Product(2, '第二个商品', 2.99, 2.5, '商品描述2',['食品', '化妆品']),
      new Product(3, '第三个商品', 3.99, 3, '商品描述3',['办公用品','电子产品']),
      new Product(4, "第四个商品", 4.99, 4.5, "商品描述4",["食品", "电子产品"]),
      new Product(5, "第五个商品", 4.55, 3.5, "商品描述5",["电子产品"]),
      new Product(5, "第六个商品", 3.89, 5, "商品描述5",["虚拟产品"]),
    ];
  }
}

export class Product {
  public id: number;
  public title: string;
  public price: number;
  public rating: number;
  public desc: string;
  public categories: Array<string>;
  constructor(id, title, price, rating, desc, categories) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.rating = rating;
    this.desc = desc;
    this.categories = categories;
  }
}
