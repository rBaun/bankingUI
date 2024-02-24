import { Component } from '@angular/core';
import { LoginNavbarComponent } from './components/login-navbar/login-navbar.component';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { AuthRequest } from './models/auth-request.dto';
import { UserCredentials } from './models/user-credentials.model';
import { AuthService } from './services/auth.service';

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

  constructor(
    private authService: AuthService
  ) { }

  onSelectedTabIndexChanged = (index: number) => {
    this.selectedTabIndex = index;
  }

  onLoginClick = (userCredentials: UserCredentials) => {
    if (!userCredentials.valid) { return; }

    const request = this.createAuthRequest(userCredentials);
    this.authService.login(request).subscribe(response => {
      localStorage.setItem('token', response.token);
    })
  }

  onRegisterClick = (userCredentials: UserCredentials) => {
    if (!userCredentials.valid) { return; }

    const request = this.createAuthRequest(userCredentials);
    this.authService.register(request).subscribe(response => {
      localStorage.setItem('token', response.token);
    })
  }

  private createAuthRequest = (userCredentials: UserCredentials): AuthRequest => {
    return { username: userCredentials.email!, password: userCredentials.password! }
  }
}
