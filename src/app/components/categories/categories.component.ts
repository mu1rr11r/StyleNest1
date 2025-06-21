import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CetegeryService } from '../../core/services/cetegery.service';
import { Icetegery } from '../../core/interfaces/icetegery';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  private readonly _CetegeryService = inject(CetegeryService);
  catagery: Icetegery[] = [];

  ngOnInit(): void {
    this._CetegeryService.getallcategery().subscribe({
      next: (res) => {
        console.log(res.data);
        this.catagery = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
