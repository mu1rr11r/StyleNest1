import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Icart } from '../../core/interfaces/icart';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartDatels:Icart={}as Icart
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService=inject(ToastrService);


  ngOnInit(): void {
    this._CartService.getProductcart().subscribe({
      next:(res)=>{
        console.log(res.data)
        this.cartDatels=res.data
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
    delet(id:string):void{
    this._CartService.DELETECard(id).subscribe({
      next:(res)=>{
        console.log(res)
        this.cartDatels=res.data
      },
      error:(err)=>{
        console.log(err)
      }
    })
    }
    Updatcount(id:string,count:number):void{
      this._CartService.updateItemCount(id,count).subscribe({
        next:(res)=>{
          console.log(res)
          this.cartDatels=res.data
                    this._ToastrService.success('uccessfully added')
        },
        error:(err)=>{
          console.log(err)
        },
      })
    }
    clearCart():void{
      this._CartService.Clearusercart ().subscribe({
        next:(res)=>{
          console.log(res)
          if(res.message=='success')
            {
            this.cartDatels={}as Icart
          }
          this._ToastrService.success('Deleted successfully')
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  }


