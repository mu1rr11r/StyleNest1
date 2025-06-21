import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdectsService } from '../../core/services/prodects.service';
import { Iprodact } from '../../core/interfaces/iprodact';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detals',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './detals.component.html',
  styleUrl: './detals.component.css'
})
export class DetalsComponent implements OnInit {
  private readonly  _CartService=inject(CartService)
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _ProdectsService=inject(ProdectsService)
  private readonly _ToastrService=inject(ToastrService)
  detiles:Iprodact|null=null;
customOptionsdetals: OwlOptions = {
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    }
  }
};

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
        let idproducts= p.get('id');
            this._ProdectsService.getspecificprodect(idproducts).subscribe({
      next:(res)=>{
        console.log(res.data)
        this.detiles=res.data;
      },
      error:(err)=>{
        console.log(err)
      },
    })
      }
    })

  }
 addcerd(id:string):void{
  this._CartService.addProductToCart(id).subscribe({
    next:(res)=>{
      console.log(res);
      this._ToastrService.success('uccessfully added')
    }
  })
 }

}
