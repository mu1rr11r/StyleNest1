import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userdata:any=null
private readonly HttpClient_:HttpClient=inject(HttpClient);

sendRegester(Date:object):Observable<any>
{
  return this.HttpClient_.post(`${environments.baseurl}/api/v1/auth/signup`,Date)
}

sendlogin(Date:object):Observable<any>
{
  return this.HttpClient_.post(`${environments.baseurl}/api/v1/auth/signin`,Date)
}

savauserdata(): void {
  if (localStorage.getItem('userToken') !== null) {
   this.userdata= jwtDecode(localStorage.getItem('userToken')!);
   console.log("cssd",this.userdata)
  }
}
}
