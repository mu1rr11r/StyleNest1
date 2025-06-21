import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdectsService {

  private readonly _HttpClient=inject(HttpClient)

  getAllprodect():Observable<any>
  {
    return this._HttpClient.get(`${environments.baseurl}/api/v1/products`)
  }

  getspecificprodect(id:string|null):Observable<any>
  {
    return this._HttpClient.get(`${environments.baseurl}/api/v1/products/${id}`)
  }
}
