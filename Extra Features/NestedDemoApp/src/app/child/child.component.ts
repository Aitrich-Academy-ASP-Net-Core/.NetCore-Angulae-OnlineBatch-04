import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() message: string = '';

  // Output to parent (events flow up). Emits a string.
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  // Called when the button is clicked
  sendToParent() {
    // Emit a message back to the parent
    this.notify.emit('Child says: I got -> ' + this.message);
  }}
