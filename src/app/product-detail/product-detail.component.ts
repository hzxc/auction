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
  private comments:Array<Comment>;
  
  private newRating:number = 5;
  private newComent:string = '';

  private isCommentHidden:boolean = true;
  private commentBtnText:string = "发表评论";

  hiddenEvent(){
    this.isCommentHidden = ! this.isCommentHidden;
    this.commentBtnText = this.isCommentHidden? '发表评论' : '关闭评论';
  }

  constructor(private routeInfo: ActivatedRoute,private prodSrv:ProductService) { }

  ngOnInit() {
    let prodId:number=this.routeInfo.snapshot.params['prodId'];
    this.prod = this.prodSrv.getProduct(prodId);
    this.comments =  this.prodSrv.getCommentsByProductId(prodId);
  }
  
  addComment(event:any){
    let comment = new Comment(0,this.prod.id,'2017-09-19 15:38:00',"hzxc",this.newRating,this.newComent);
    // this.comments.push(comment);
    this.comments.unshift(comment);

    //reduce包含两个参数，第应该为匿名的回掉，第二个为初始值
    let sum = this.comments.reduce((sum,comment)=>sum + comment.rating
      ,0
    );

    this.prod.rating = sum/(this.comments.length);

    this.newComent = null;
    this.newRating = 5;
    this.hiddenEvent();
  }
}
