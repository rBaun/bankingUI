import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
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
    private authService: AuthService,
    private router: Router
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
        // Navigate to the customer home page
        this.router.navigate(['/dashboard']);


        console.log('Login success', response);
      },
      error: err => {
        this.handleError(err);
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
        this.handleError(err);
      }
    })
  }

  private handleError = (error: any) => {
    this.errorMessage = error.error;
  }

  private createAuthRequest = (userCredentials: UserCredentials): AuthRequest => ({ username: userCredentials.email!, password: userCredentials.password! })
}
