import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    LoginComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'bankingUI';
}
