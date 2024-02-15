import { Component, OnInit } from '@angular/core';
import { UserRegistrationComponent } from 'src/app/features/user/user-registration/user-registration.component';

@Component({
  selector: 'app-user-registration-page',
  templateUrl: './user-registration-page.component.html',
  styleUrls: ['./user-registration-page.component.css'],
  standalone: true,
  imports: [UserRegistrationComponent]
})
export class UserRegistrationPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
