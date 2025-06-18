import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class CetegeryService {

 private readonly _HttpClient=inject(HttpClient)

 getallcategery():Observable<any>
 {
  return this._HttpClient.get(`${environments.baseurl}/api/v1/categories`)
 }
  getspecificcategery(id:string):Observable<any>
 {
  return this._HttpClient.get(`${environments.baseurl}/api/v1/categories/${id}`)
 }
}
