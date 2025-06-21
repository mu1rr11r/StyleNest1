import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
private readonly _HttpClient=inject(HttpClient)

brend():Observable<any>
{
  return this._HttpClient.get(`${environments.baseurl}/api/v1/brands`)
}}
