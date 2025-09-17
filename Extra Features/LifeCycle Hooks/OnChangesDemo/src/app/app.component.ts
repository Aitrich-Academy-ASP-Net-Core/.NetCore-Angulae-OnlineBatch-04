import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentName = 'Rahul';

  changeName() {
    this.studentName = this.studentName === 'Rahul' ? 'Anjali' : 'Rahul';
  }
}
