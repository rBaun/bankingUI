import { Component, EventEmitter, Output } from '@angular/core';
import { UserCredentials } from '../../models/user-credentials.model';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss'],
  standalone: true,
  imports: [
    LoginFormComponent
  ]
})
export class UserSignUpComponent {
  @Output() submitNewUser = new EventEmitter<UserCredentials>();

  onSubmit = (credentials: UserCredentials): void => this.submitNewUser.emit(credentials);
}
