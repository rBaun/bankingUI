import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-user-form-navbar',
  templateUrl: './user-form-navbar.component.html',
  styleUrls: ['./user-form-navbar.component.scss'],
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule
  ]
})
export class UserFormNavbarComponent {
  @Output() selectedTabIndexChanged = new EventEmitter<number>();

  onTabChange = (event: MatTabChangeEvent): void => this.selectedTabIndexChanged.emit(event.index);
}
