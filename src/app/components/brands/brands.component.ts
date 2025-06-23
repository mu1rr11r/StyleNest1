import { Component, inject } from '@angular/core';
import { BrandService } from '../../core/services/brand.service';
import { Ibrand } from '../../core/interfaces/ibrand';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
  private readonly _BrandService=inject(BrandService)
brends:Ibrand[]=[]

ngOnInit():void{
  this._BrandService.brend().subscribe({
    next:(res)=>{
      this.brends=res.data
    },
    error:(err)=>{
      console.log(err)
    }
  })
}


}
