import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly _HttpClient = inject(HttpClient);

myHeaders: any = { token : localStorage.getItem('userToken') };

addProductToCart(id: string): Observable<any> {
    return this._HttpClient.post(`${environments.baseurl}/api/v1/cart`, {
        "productId": id
    },
    {
        headers: this.myHeaders
    });
}

getProductcart():Observable<any>{
  return this._HttpClient.get(`${environments.baseurl}/api/v1/cart`,
    {
      headers:this.myHeaders
    }
  )
}

DELETECard(id:string):Observable<any>{
  return this._HttpClient.delete(`${environments.baseurl}/api/v1/cart/${id}`,
    {
      headers:this.myHeaders
    }
  )
}
updateItemCount(id: string, count: number): Observable<any> {
  return this._HttpClient.put(`${environments.baseurl}/api/v1/cart/${id}`, {
    count: count
  }, {
    headers: this.myHeaders
  });
}

Clearusercart():Observable<any>{
  return this._HttpClient.delete(`${environments.baseurl}/api/v1/cart`,
    {
      headers:this.myHeaders
    }
  )
}
  }

