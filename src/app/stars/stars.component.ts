import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import 'intl'
import 'intl/locale-data/jsonp/en.js'

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {
 

  @Input()
  private rating:number = 0;

  //当次输出事件的名称不为ratingChange时，在detail中就只能用事件绑定去接收rating值
  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();

  private stars:boolean[];
  @Input()
  private readonly:boolean = true;

  constructor() { }
  
  ngOnInit() {
    this.stars = [];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
  }
  clickStar(index:number){
    if(!this.readonly){
    this.rating = index + 1;
    // this.ngOnInit();
    this.ratingChange.emit(this.rating);
  }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
}
