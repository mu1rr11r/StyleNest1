import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
 public readonly _AuthService=inject(AuthService)
  username: string | null = '';
  useremail: string | null = '';
  constructor() {
    this.username = localStorage.getItem('username');
    this.useremail = localStorage.getItem('useremail');
  }
}
