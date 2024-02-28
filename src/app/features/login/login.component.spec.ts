import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { LoginComponent } from './login.component';
import { UserCredentials } from './models/user-credentials.model';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let authService: AuthService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, BrowserAnimationsModule],
            providers: [AuthService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthService);
        fixture.detectChanges();
    });

    it('should create the LoginComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize with default values', () => {
        expect(component.selectedTabIndex).toBe(0);
        expect(component.errorMessage).toBeUndefined();
    });

    it('should change the selected tab index', () => {
        component.onSelectedTabIndexChange(1);
        expect(component.selectedTabIndex).toBe(1);
    });


    it('should call authService.login when onLoginClick is called', () => {
        const userCredentials: UserCredentials = { email: 'testuser@example.com', password: 'testpassword', valid: true };
        const expectedAuthRequest = (component as any).createAuthRequest(userCredentials);

        const authServiceSpy = jest.spyOn(authService, 'login');
        authServiceSpy.mockReturnValue(of(true));

        component.onLoginClick(userCredentials);

        expect(authServiceSpy).toHaveBeenCalledWith(expectedAuthRequest);
        expect(component.errorMessage).toBeUndefined();
    });

    it('should call authService.register when onRegisterClick is called', () => {
        const userCredentials: UserCredentials = { email: 'testuser@example.com', password: 'testpassword', valid: true };
        const expectedAuthRequest = (component as any).createAuthRequest(userCredentials);
        const authServiceSpy = jest.spyOn(authService, 'register').mockReturnValue(of(true));

        component.onRegisterClick(userCredentials);

        expect(authServiceSpy).toHaveBeenCalledWith(expectedAuthRequest);
        expect(component.errorMessage).toBeUndefined();
    });

    it('should create an AuthRequest object with user credentials', () => {
        const userCredentials: UserCredentials = { email: 'testuser', password: 'testpassword', valid: true };
        const expectedAuthRequest = (component as any).createAuthRequest(userCredentials);
        const authRequest = (component as any).createAuthRequest(userCredentials);

        expect(authRequest).toEqual(expectedAuthRequest);
    });
});