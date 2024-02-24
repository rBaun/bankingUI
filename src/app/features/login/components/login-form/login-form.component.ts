import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmailInputComponent } from 'src/app/library/components/inputs/email-input/email-input.component';
import { PasswordInputComponent } from 'src/app/library/components/inputs/password-input/password-input.component';
import { UserCredentials } from '../../models/user-credentials.model';

/**
 * Represents a login form component that is used for registration and login purposes
 */
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    EmailInputComponent,
    PasswordInputComponent,
  ]
})
export class LoginFormComponent {

  @Input() title?: string;
  @Input() buttonText: string | undefined;
  @Output() submitForm = new EventEmitter<UserCredentials>();

  public loginFormGroup: FormGroup;

  constructor() {
    this.loginFormGroup = this.createLoginFormGroup();
  }

  private createLoginFormGroup = (): FormGroup => {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit = (): void => this.loginFormGroup.valid ? this.emitValidUserCredentials() : this.emitInvalidUserCredentials();

  private emitInvalidUserCredentials = (): void => this.submitForm.emit({ valid: false });
  private emitValidUserCredentials = (): void => this.submitForm.emit({ email: this.emailFormControl.value, password: this.passwordFormControl.value, valid: true });

  get emailFormControl(): FormControl { return this.loginFormGroup.get('email') as FormControl; }
  get passwordFormControl(): FormControl { return this.loginFormGroup.get('password') as FormControl; }
}
