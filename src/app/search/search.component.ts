import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;
  categories:string[];

  constructor(private formBuilder: FormBuilder,private prodSrv:ProductService) {
    this.formModel = formBuilder.group({
      productTitle: ['',Validators.minLength(3)],
      productPrice: [null,this.positiveNumberValidator],
      productCategory:['-1']
    });
  }

  positiveNumberValidator(control:FormControl):any{
    if(!control.value){
      return null;
    }
    let price = parseFloat(control.value);
    if(price >= 0){
      return null;
    }else{
      return {positiveNumber:{errMsg:'请输入正确价格'}}
    }
  }


  ngOnInit() {
    this.categories = this.prodSrv.getAllCategories();
  }
  onSearch(){
    if(this.formModel.valid){
      console.log(this.formModel.value);
    }
  }
}
