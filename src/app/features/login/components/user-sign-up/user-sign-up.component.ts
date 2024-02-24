import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserCredentials } from '../../models/user-credentials.model';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss'],
  standalone: true,
  imports: [
    UserFormComponent
  ]
})
export class UserSignUpComponent {
  @Input() errorMessage?: string;
  @Output() submitNewUser = new EventEmitter<UserCredentials>();

  onSubmit = (credentials: UserCredentials): void => this.submitNewUser.emit(credentials);
}
