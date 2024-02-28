import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
    let component: ErrorMessageComponent;
    let fixture: ComponentFixture<ErrorMessageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display the error message', () => {
        const errorMessage = 'This is an error message';
        component.message = errorMessage;
        fixture.detectChanges();
        const errorMessageElement = fixture.nativeElement.querySelector('.error-text');
        expect(errorMessageElement.textContent).toContain(errorMessage);
    });
});
