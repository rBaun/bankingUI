import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCredentials } from '../../models/user-credentials.model';
import { UserSignInComponent } from './user-sign-in.component';

describe('UserSignInComponent', () => {
    let component: UserSignInComponent;
    let fixture: ComponentFixture<UserSignInComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserSignInComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit submitLogin event when onSubmit is called', () => {
        const credentials: UserCredentials = { email: 'test@user', password: 'testpassword', valid: true };
        const submitLoginSpy = jest.spyOn(component.submitLogin, 'emit');

        component.onSubmit(credentials);

        expect(submitLoginSpy).toHaveBeenCalledWith(credentials);
    });
});
