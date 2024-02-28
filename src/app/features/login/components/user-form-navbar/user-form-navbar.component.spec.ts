import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFormNavbarComponent } from './user-form-navbar.component';

describe('UserFormNavbarComponent', () => {
    let component: UserFormNavbarComponent;
    let fixture: ComponentFixture<UserFormNavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MatTabsModule, MatIconModule, BrowserAnimationsModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserFormNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should emit selectedTabIndexChanged event on tab change', () => {
        const index = 1;
        jest.spyOn(component.selectedTabIndexChanged, 'emit');
        component.onTabChange({ index } as any);
        expect(component.selectedTabIndexChanged.emit).toHaveBeenCalledWith(index);
    });
});
