import { Component } from '@angular/core';
import { LoginNavbarComponent } from './components/login-navbar/login-navbar.component';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    LoginNavbarComponent,
    UserSignInComponent,
    UserSignUpComponent
  ]
})
export class LoginComponent {
  USER_LOGIN_TAB_INDEX = 0;
  USER_REGISTER_TAB_INDEX = 1;

  selectedTabIndex = 0;

  constructor() { }

  onSelectedTabIndexChanged = (index: number) => {
    this.selectedTabIndex = index;
  }
}
