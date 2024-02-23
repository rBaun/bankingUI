import { Component, OnInit } from '@angular/core';
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
export class UserSignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit = (): void => {

  }

}
