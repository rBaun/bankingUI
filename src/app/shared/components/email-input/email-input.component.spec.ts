import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailInputComponent } from './email-input.component';

describe('EmailInputComponent', () => {
    let component: EmailInputComponent;
    let fixture: ComponentFixture<EmailInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EmailInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a default placeholder value', () => {
        expect(component.placeholder).toBe('Email');
    });

    it('should have a FormControl with required validator', () => {
        expect(component.emailFormControl.hasError('required')).toBeTruthy();
    });

    it('should have a FormControl with invalid email value', () => {
        component.emailFormControl.setValue('invalidemail');
        expect(component.emailFormControl.hasError('email')).toBeTruthy();
    });

});
