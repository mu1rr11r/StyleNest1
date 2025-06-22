import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

private readonly _HttpClient=inject(HttpClient)
myHeaders: any = { token : localStorage.getItem('userToken') };


orderApi(idorder:string|null,shippingdetels:object):Observable<any>{
  return this._HttpClient.post(`${environments.baseurl}/api/v1/orders/checkout-session/${idorder}?url=${environments.urlServer}`,

     {
        "shippingAddress":shippingdetels

     },
    {
      headers:this.myHeaders
    }
  )
}
}
