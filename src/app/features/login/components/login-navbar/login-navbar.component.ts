import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-login-navbar',
  templateUrl: './login-navbar.component.html',
  styleUrls: ['./login-navbar.component.scss'],
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule
  ]
})
export class LoginNavbarComponent {
  @Output() selectedTabIndexChanged = new EventEmitter<number>();

  onTabChange = (event: MatTabChangeEvent): void => this.selectedTabIndexChanged.emit(event.index);
}
