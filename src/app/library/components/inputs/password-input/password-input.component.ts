import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class PasswordInputComponent {
  // require at least one lowercase, one uppercase, one digit and one special character, where special characters are '@$!%*?&'
  private STRONG_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  @Input() passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.STRONG_PASSWORD_REGEX)]);
  @Input() placeholder = 'Password';
}
