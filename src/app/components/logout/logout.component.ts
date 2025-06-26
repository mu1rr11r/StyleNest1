import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { MytransletService } from '../../core/services/mytranslet.service';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
 public readonly _AuthService=inject(AuthService)
 public readonly _MytransletService=inject(MytransletService)
  username: string | null = '';
  useremail: string | null = '';
  constructor() {
    this.username = localStorage.getItem('username');
    this.useremail = localStorage.getItem('useremail');
  }
change(lang: string): void {
  this._MytransletService.changelngug(lang);
}

toggleDarkMode(): void {
  document.body.classList.toggle('dark-mode');
}


}
