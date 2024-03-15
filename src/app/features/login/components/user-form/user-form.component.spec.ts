import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCredentials } from '../../models/user-credentials.model';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
    let component: UserFormComponent;
    let fixture: ComponentFixture<UserFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, BrowserAnimationsModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize login form group', () => {
        expect(component.loginFormGroup).toBeDefined();
        expect(component.loginFormGroup.get('email')).toBeDefined();
        expect(component.loginFormGroup.get('password')).toBeDefined();
    });

    it('should validate email and password fields', () => {
        const email = component.loginFormGroup.get('email');
        const password = component.loginFormGroup.get('password');


        if (email && password) {
            if (email) { email.setValue(''); }
            if (password) { password.setValue(''); }

            expect(email.valid).toBeFalsy();
            expect(password.valid).toBeFalsy();

            email.setValue('test@example.com');
            password.setValue('12345678');

            expect(email.valid).toBeTruthy();
            expect(password.valid).toBeTruthy();
        }
    });

    it('should emit user credentials on form submit', () => {
        jest.spyOn(component.submitForm, 'emit');

        const emailControl = component.loginFormGroup.get('email');
        const passwordControl = component.loginFormGroup.get('password');

        if (emailControl && passwordControl) {
            emailControl.setValue('test@example.com');
            passwordControl.setValue('12345678');
            component.onSubmit();

            const expectedData: UserCredentials = {
                email: 'test@example.com',
                password: '12345678',
                valid: true
            };
            expect(component.submitForm.emit).toHaveBeenCalledWith(expectedData);
        }
    });
});