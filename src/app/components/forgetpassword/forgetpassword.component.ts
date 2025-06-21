import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { validateHeaderValue } from 'node:http';
import { AuthService } from '../../core/services/auth.service';
import { error } from 'node:console';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {
  private readonly _AuthService=inject(AuthService)
  private readonly _Router=inject(Router)
  step:number=1;
  verieemail:FormGroup =new FormGroup ({
    email:new FormControl (null,[Validators.required,Validators.email])
  })
  vericode:FormGroup= new FormGroup({
  resetCode:new FormControl (null,[Validators.required,Validators.pattern(/^[0-9]{6}$/)])
  })
  resetpassword:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)])
  })


  veriedEmail():void{
    this._AuthService.setemailValidetor(this.verieemail.value).subscribe({
      next:(res)=>{
        console.log(res)
        if(res.statusMsg==='success'){
          this.step=2
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


    veriedcode():void{
    this._AuthService.VerifyResetCode(this.vericode.value).subscribe({
      next:(res)=>{
        console.log(res)
        if(res.statusMsg==='Success'){
          this.step=3
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


veriedresetpassword(): void {
  this._AuthService.resetpassowerd(this.resetpassword.value).subscribe({
    next: (res) => {
      console.log(res);
      localStorage.setItem('userToken', res.token);
      this._AuthService.savauserdata();
      this._Router.navigate(['/home']);
    },
    error: (err) => {
      console.log(err);
    }
  });
}

  }



