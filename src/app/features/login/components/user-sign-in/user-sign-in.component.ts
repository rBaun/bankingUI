import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserCredentials } from '../../models/user-credentials.model';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss'],
  standalone: true,
  imports: [
    UserFormComponent
  ]
})
export class UserSignInComponent {
  @Input() errorMessage?: string;
  @Output() submitLogin = new EventEmitter<UserCredentials>();

  onSubmit = (credentials: UserCredentials): void => this.submitLogin.emit(credentials);
}
