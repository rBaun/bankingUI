import { Component } from '@angular/core';
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

  constructor() { }

  onSubmit = (): void => {

  }
}
