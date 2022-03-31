import { Component, OnInit } from '@angular/core';
import { CartService } from '../myservice/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public home : any =[];
  public grandTotal ! : number;
  

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService['getHome']()
    .subscribe((res: any): void=>{
      this.home=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
removeItem(item:any){
    this.cartService.removeAllCart();
}
emptycart(){
  this.cartService.removeAllCart();
}
}
