import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { CartService } from '../myservice/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit {
public productList : any ;
public totalItem : number=0;
  constructor(private api : MyserviceService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.totalItem=res.length;
    });
      this.productList.forEach((a : any)=>{
        Object.assign(a,{quality:1,total:a.price});
      
    })
  }  
  addtocart(item : any){
    this.cartService.addtoCart(item);
  }
}
