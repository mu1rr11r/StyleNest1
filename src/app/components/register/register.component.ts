import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  message:String=''
  isloding:boolean=false
  private readonly _AuthService=inject(AuthService)
    private readonly Router=inject(Router)


  Registerform : FormGroup = new FormGroup({

  name:new FormControl(null , [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
  rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])

  },this.confirmPassword)

    confirmPassword(g:any){
  if(g.get('password').value === g.get('rePassword').value)
    {
      return null
    }
    else{
      return {'paswordMatch':true}
    }
  }

    Registersubmit():void
  {
   if(this.Registerform.valid)
    {
          this.isloding=true

      this._AuthService.sendRegester(this.Registerform.value).subscribe({
        next:(res)=>{
                if(res.message=='success')
      {

        if (res.message == 'success') {
            localStorage.setItem('username', this.Registerform.value.name);
  this.Router.navigate(['/login']);
}

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
      this.Registerform.markAllAsTouched()
    }
  }
}
