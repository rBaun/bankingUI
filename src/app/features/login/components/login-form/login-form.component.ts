import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EmailInputComponent } from 'src/app/library/components/inputs/email-input/email-input.component';
import { PasswordInputComponent } from 'src/app/library/components/inputs/password-input/password-input.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  standalone: true,
  imports: [EmailInputComponent, PasswordInputComponent, MatButtonModule]
})
export class LoginFormComponent {
  @Input() title: string | undefined;
  @Input() buttonText: string | undefined;

  @Output() buttonClick = new EventEmitter<boolean>();

  // TODO: Create the login form group/controls

  constructor() { }

  onButtonClick = () => this.buttonClick.emit(true);
}
