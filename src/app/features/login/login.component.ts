import { Component, OnInit } from '@angular/core';
import { LoginFooterComponent } from './components/login-footer/login-footer.component';
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
    LoginFooterComponent,
    UserSignInComponent,
    UserSignUpComponent
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
