import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCredentials } from '../../models/user-credentials.model';
import { UserSignUpComponent } from './user-sign-up.component';

describe('UserSignUpComponent', () => {
    let component: UserSignUpComponent;
    let fixture: ComponentFixture<UserSignUpComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserSignUpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit submitNewUser event when onSubmit is called', () => {
        const credentials: UserCredentials = { email: 'test@user', password: 'testpassword', valid: true };
        let emittedCredentials: UserCredentials | undefined;

        component.submitNewUser.subscribe((value) => {
            emittedCredentials = value;
        });

        component.onSubmit(credentials);

        expect(emittedCredentials).toEqual(credentials);
    });
});
