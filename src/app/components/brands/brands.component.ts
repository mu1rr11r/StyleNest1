import { Component, inject } from '@angular/core';
import { BrandService } from '../../core/services/brand.service';
import { Ibrand } from '../../core/interfaces/ibrand';
import { RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
  private readonly _BrandService=inject(BrandService)
  private readonly _NgxSpinnerService=inject(NgxSpinnerService)
brends:Ibrand[]=[]

ngOnInit():void{
  this._NgxSpinnerService.show('loding-1')
  this._BrandService.brend().subscribe({
    next:(res)=>{
      this.brends=res.data
      this._NgxSpinnerService.hide('loding-1')
    },
    error:(err)=>{
      console.log(err)
    }
  })
}


}
