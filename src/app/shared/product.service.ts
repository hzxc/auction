import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  private products: Array<Product> = [
    new Product(1, '第一个商品', 1.99, 3.5, '商品描述1', ['食品']),
    new Product(2, '第二个商品', 2.99, 2.5, '商品描述2', ['食品', '化妆品']),
    new Product(3, '第三个商品', 3.99, 3, '商品描述3', ['办公用品', '电子产品']),
    new Product(4, "第四个商品", 4.99, 4.5, "商品描述4", ["食品", "电子产品"]),
    new Product(5, "第五个商品", 4.55, 3.5, "商品描述5", ["电子产品"]),
    new Product(5, "第六个商品", 3.89, 5, "商品描述5", ["虚拟产品"]),
  ];

  getProducts(): Array<Product> {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product:Product) => product.id == id);
  }

  getCommentsByProductId(id:number):Array<Comment>{
    return this.comments.filter((comment:Comment) =>comment.productId == id)
  }

  private comments: Array<Comment> = [
    new Comment(1, 1, '2017-02-02 22:22:22', '张三', 3, '打个酱油'),
    new Comment(2, 1, '2017-02-02 22:22:22', '张三', 3.5, '打个酱油1'),
    new Comment(3, 1, '2017-02-02 22:22:22', '张三', 5, '打个酱油2'),
    new Comment(4, 2, '2017-02-02 22:22:22', '张三', 4, '打个酱油3'),
    new Comment(5, 3, '2017-02-02 22:22:22', '张三', 2.5, '打个酱油4'),
    new Comment(6, 4, '2017-02-02 22:22:22', '张三', 4, '打个酱油5'),
    new Comment(7, 5, '2017-02-02 22:22:22', '张三', 1, '打个酱油6'),
    new Comment(8, 6, '2017-02-02 22:22:22', '张三', 3.5, '打个酱油6'),
  ]
}

export class Product {
  // public id: number;
  // public title: string;
  // public price: number;
  // public rating: number;
  // public desc: string;
  // public categories: Array<string>;
  constructor(public id: number, public title: string, public price: number, public rating: number, public desc: string, public categories: Array<string>) {
    // this.id = id;
    // this.title = title;
    // this.price = price;
    // this.rating = rating;
    // this.desc = desc;
    // this.categories = categories;
  }
}

export class Comment {
  constructor(public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string,
  ) {

  }
}
