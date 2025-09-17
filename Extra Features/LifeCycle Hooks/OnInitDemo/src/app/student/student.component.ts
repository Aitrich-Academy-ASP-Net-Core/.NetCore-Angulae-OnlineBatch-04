import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 message: string = 'Before Init...';



  // This will run once when component is created
  ngOnInit(): void {
    
    this.message = 'Welcome! ngOnInit has run.';
    console.log('ngOnInit message =', this.message);
  }
   constructor() {
  console.log('Constructor message =', this.message); // prints "Before Init..."
}
}
