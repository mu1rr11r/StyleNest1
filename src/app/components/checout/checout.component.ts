import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-checout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checout.component.html',
  styleUrl: './checout.component.css'
})
export class ChecoutComponent implements OnInit{
  private readonly _ActivatedRoute=inject(ActivatedRoute)
      private readonly _OrderService=inject(OrderService)
      private readonly _NgxSpinnerService=inject(NgxSpinnerService)

  cartid:string|null="";
  order:FormGroup=new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null),
  })
    ngOnInit(): void {
      this._NgxSpinnerService.show('loding-1')
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
    this.cartid= params.get('id')
    console.log(this.cartid)
          this._NgxSpinnerService.hide('loding-1')

      }
    })
  }
  orderssumpint():void{
    console.log(this.order.value)
    this._OrderService.orderApi(this.cartid,this.order.value).subscribe({
      next:(res)=>{
        console.log(res)
        if(res.status==='success')
          {
          window.open( res.session.url)
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
