import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, ProductService,Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // private productTitle: string;
  private prod:Product;
  private comment:Array<Comment>;

  constructor(private routeInfo: ActivatedRoute,private prodSrv:ProductService) { }

  ngOnInit() {
    let prodId:number=this.routeInfo.snapshot.params['prodId'];
    this.prod = this.prodSrv.getProduct(prodId);
    this.comment =  this.prodSrv.getCommentsByProductId(prodId);
  }
}
