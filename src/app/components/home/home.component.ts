import { Component, inject, OnInit } from '@angular/core';
import { ProdectsService } from '../../core/services/prodects.service';
import { Iprodact } from '../../core/interfaces/iprodact';
import { CetegeryService } from '../../core/services/cetegery.service';
import { Icetegery } from '../../core/interfaces/icetegery';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit
{
 private readonly   _ProdectsService=inject(ProdectsService)
  private readonly   _CetegeryService=inject(CetegeryService)


 cetegerylist:Icetegery[]=[]
customOptionscatgery: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 7
      }
    },
    nav: false
  }
  customOptionscares: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: true,
    navSpeed: 700,
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
    },
    nav: false
  }
 ngOnInit(): void {
  this._CetegeryService.getallcategery().subscribe({
    next:(res)=>{
      this.cetegerylist=res.data;
    },
    error:(err)=>{
      console.log(err)
    },
  })

 }
}
