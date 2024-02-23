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
  /**
   * The title of the login form.
   * @example 'Sign up'
   */
  @Input() title?: string;

  /**
   * The text to display on the submit button
   * @example 'Submit'
   */
  @Input() buttonText: string | undefined;

  /**
   * Event emitted when the form is submitted.
   * @emits email/password, if form is valid
   * @emits null, if form is invalid
   */
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

  onSubmit = (): void => {
    if (!this.loginFormGroup.valid) { this.emitInvalidUserCredentials() }

    this.emitUserCredentials();
  };

  private emitInvalidUserCredentials = (): void => this.submitForm.emit({ valid: false });
  private emitUserCredentials = (): void => this.submitForm.emit({ email: this.emailFormControl.value, password: this.passwordFormControl.value, valid: true });

  get emailFormControl(): FormControl { return this.loginFormGroup.get('email') as FormControl; }
  get passwordFormControl(): FormControl { return this.loginFormGroup.get('password') as FormControl; }
}
