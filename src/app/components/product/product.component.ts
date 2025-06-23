import { Component, inject, Inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ProdectsService } from '../../core/services/prodects.service';
import { Iprodact } from '../../core/interfaces/iprodact';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  private readonly  _ProdectsService=inject(ProdectsService)
  private readonly _CartService=inject(CartService)
private readonly _ToastrService = inject(ToastrService);
 Prodectlist:Iprodact[]=[]

   ngOnInit(): void {

     this._ProdectsService.getAllprodect().subscribe({
      next:(res)=>{
      this.Prodectlist=res.data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
 }

addcerd(id: string): void {
  this._CartService.addProductToCart(id).subscribe({
    next: (res) => {
      console.log(res);
      this._ToastrService.success('uccessfully added')
    },
    error: (err) => {
      console.error(err);
      this._ToastrService.error('Failed to add product to cart.', 'Error');
    }
  });
}
}
