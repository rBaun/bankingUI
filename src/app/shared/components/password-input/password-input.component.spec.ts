import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordInputComponent } from './password-input.component';

describe('PasswordInputComponent', () => {
    let component: PasswordInputComponent;
    let fixture: ComponentFixture<PasswordInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a passwordFormControl with required validator', () => {
        expect(component.passwordFormControl).toBeInstanceOf(FormControl);
        expect(component.passwordFormControl.errors?.['required']).toBeTruthy();
    });

    it('should have a passwordFormControl with minLength validator', () => {
        component.passwordFormControl.setValue('123'); // Set a value that is too short
        expect(component.passwordFormControl).toBeInstanceOf(FormControl);
        expect(component.passwordFormControl.errors?.['minlength']).toBeTruthy();
    });

    it('should have a passwordFormControl with pattern validator', () => {
        component.passwordFormControl.setValue('invalid'); // Set a value that does not match the pattern
        expect(component.passwordFormControl).toBeInstanceOf(FormControl);
        expect(component.passwordFormControl.errors?.['pattern']).toBeTruthy();
    });

    it('should have a placeholder', () => {
        expect(component.placeholder).toBe('Password');
    });
});
