import { Component, inject, OnInit } from '@angular/core';
import { ProdectsService } from '../../core/services/prodects.service';
import { Iprodact } from '../../core/interfaces/iprodact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit
{
 private readonly   _ProdectsService=inject(ProdectsService)

 Prodectlist:Iprodact[]=[]

 ngOnInit(): void {
     this._ProdectsService.getAllprodect().subscribe({
      next:(res)=>{
      console.log(res.data);
      this.Prodectlist=res.data;
      },
      error:(err)=>{
        console.log(err)
      }
     })
 }
}
