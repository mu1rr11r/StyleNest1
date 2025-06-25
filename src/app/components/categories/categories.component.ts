import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CetegeryService } from '../../core/services/cetegery.service';
import { Icetegery } from '../../core/interfaces/icetegery';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  private readonly _CetegeryService = inject(CetegeryService);
  private readonly _NgxSpinnerService=inject(NgxSpinnerService)
  catagery: Icetegery[] = [];

  ngOnInit(): void {
    this._NgxSpinnerService.show('loding-1')
    this._CetegeryService.getallcategery().subscribe({
      next: (res) => {
        this.catagery = res.data;
            this._NgxSpinnerService.hide('loding-1')

      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
