import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   message:String=''
    isloding:boolean=false
    private readonly _AuthService=inject(AuthService)
      private readonly Router=inject(Router)


    Loginform : FormGroup = new FormGroup({

    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),

    })


      Loginsubmit():void
    {
     if(this.Loginform.valid)
      {
            this.isloding=true

        this._AuthService.sendlogin(this.Loginform.value).subscribe({
          next:(res)=>{
                  if(res.message=='success')
        {
          localStorage.setItem('userToken',res.token)
            localStorage.setItem('useremail', this.Loginform.value.email);
          this._AuthService.savauserdata()
          this.Router.navigate(['/home'])
        }
                      this.isloding=false


            console.log(res)
          },
          error:(err=HttpErrorResponse)=>{
            this.message=err.error.message
          console.log(err)
                    this.isloding=false

          }
        })
      }
      else{
        this.Loginform.markAllAsTouched()
      }
    }
}
