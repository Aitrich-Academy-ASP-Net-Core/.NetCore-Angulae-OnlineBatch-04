import { Component } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';

  constructor(private welcomeService: WelcomeService) { }

  showMessage() {
    this.message = this.welcomeService.getWelcomeMessage();
  }
}
