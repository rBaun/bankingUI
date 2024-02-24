import { Component, EventEmitter, Output } from '@angular/core';
import { UserCredentials } from '../../models/user-credentials.model';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss'],
  standalone: true,
  imports: [
    LoginFormComponent
  ]
})
export class UserSignInComponent {
  @Output() submitLogin = new EventEmitter<UserCredentials>();

  onSubmit = (credentials: UserCredentials): void => this.submitLogin.emit(credentials);
}
