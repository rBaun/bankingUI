import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthRequest } from '../../auth/models/auth-request.dto';
import { UserFormNavbarComponent } from './components/user-form-navbar/user-form-navbar.component';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { UserCredentials } from './models/user-credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    UserFormNavbarComponent,
    UserSignInComponent,
    UserSignUpComponent
  ]
})
export class LoginComponent {
  USER_LOGIN_TAB_INDEX = 0;
  USER_REGISTER_TAB_INDEX = 1;

  selectedTabIndex = 0;
  errorMessage?: string;

  constructor(
    private authService: AuthService
  ) { }

  onSelectedTabIndexChange = (index: number) => {
    this.errorMessage = '';
    this.selectedTabIndex = index;
  }

  onLoginClick = (userCredentials: UserCredentials) => {
    if (!userCredentials.valid) { return; }

    const request = this.createAuthRequest(userCredentials);
    this.authService.login(request).subscribe({
      next: response => {
        // Handle successful login
        console.log('Login success', response);
      },
      error: err => {
        this.errorMessage = err.error;
      }
    });
  }

  onRegisterClick = (userCredentials: UserCredentials) => {
    if (!userCredentials.valid) { return; }

    const request = this.createAuthRequest(userCredentials);
    this.authService.register(request).subscribe({
      next: response => {
        // Handle successful registration
        console.log('Registration success', response);
      },
      error: err => {
        this.errorMessage = err.error;
      }
    })
  }

  private createAuthRequest = (userCredentials: UserCredentials): AuthRequest => {
    return { username: userCredentials.email!, password: userCredentials.password! }
  }
}
