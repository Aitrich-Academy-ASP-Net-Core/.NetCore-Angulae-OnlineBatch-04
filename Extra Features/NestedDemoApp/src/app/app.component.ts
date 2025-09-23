import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentMessage = 'Hello Child! (from Parent)';
  messageFromChild = '';

  // Handler for event emitted by child
  onNotify(received: string) {
    this.messageFromChild = received;
}}
